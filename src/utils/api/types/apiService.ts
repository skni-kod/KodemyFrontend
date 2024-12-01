import { ApiError } from '@/utils/api/types/index';

enum FetchStatus {
	PENDING,
	SUCCESS,
	ERROR,
}

export default abstract class ApiService {
	private static wrapPromise<T>(promise: Promise<T>) {
		let status: FetchStatus = FetchStatus.PENDING;
		let data: T | ApiError;

		const suspender = promise.then(
			(res) => {
				status = FetchStatus.SUCCESS;
				data = res;
			},
			(err: ApiError) => {
				status = FetchStatus.ERROR;
				data = err;
			},
		);

		const fetch = () => {
			switch (status) {
				case FetchStatus.SUCCESS:
					return data;
				case FetchStatus.ERROR:
					throw data;
				default:
					throw suspender;
			}
		};

		return { fetch };
	}
}
