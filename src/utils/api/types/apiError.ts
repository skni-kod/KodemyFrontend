import { HttpStatusCode } from 'axios';

export default abstract class ApiError {
	public name: string;
	public status: HttpStatusCode;
	public data: ApiErrorData | null;
	public message: string;

	protected constructor(status: number, message: string, data: ApiErrorData | null) {
		Object.setPrototypeOf(this, new.target.prototype);
		this.status = status;
		this.data = data;
		this.name = new.target.name;
		this.message = message;
	}

	public static handle(status: number, message: string, data: ApiErrorData | null = null): ApiError {
		switch (status) {
			case HttpStatusCode.ServiceUnavailable:
				return new ServiceUnavailableApiError(message, data);
			case HttpStatusCode.InternalServerError:
				return new InternalServerErrorApiError(data);
			case HttpStatusCode.Unauthorized:
				return new UnauthorizedApiError(message, data);
			case HttpStatusCode.Forbidden:
				return new ForbiddenApiError(message, data);
			case HttpStatusCode.BadRequest:
				return new BadRequestApiError(message, data);
			case HttpStatusCode.NotFound:
				return new NotFoundApiError(message, data);
			default:
				return {
					name: ApiError.name,
					status: status,
					message: message,
					data: data,
				};
		}
	}
}

export interface ApiErrorData {
	status: number;
	error: string;
	message: string;
	timeStamp: Date;
}

export class ServiceUnavailableApiError extends ApiError {
	constructor(message: string, data: ApiErrorData | null = null) {
		super(HttpStatusCode.ServiceUnavailable, message, data);
	}
}

export class InternalServerErrorApiError extends ApiError {
	constructor(data: ApiErrorData | null = null) {
		super(HttpStatusCode.InternalServerError, 'Internal Server Error', data);
	}
}

export class UnauthorizedApiError extends ApiError {
	constructor(message: string, data: ApiErrorData | null = null) {
		super(HttpStatusCode.Unauthorized, message, data);
	}
}

export class ForbiddenApiError extends ApiError {
	constructor(message: string, data: ApiErrorData | null = null) {
		super(HttpStatusCode.Forbidden, message, data);
	}
}

export class BadRequestApiError extends ApiError {
	constructor(message: string, data: ApiErrorData | null = null) {
		super(HttpStatusCode.BadRequest, message, data);
	}
}

export class NotFoundApiError extends ApiError {
	constructor(message: string, data: ApiErrorData | null = null) {
		super(HttpStatusCode.NotFound, message, data);
	}
}
