import axios from 'axios';
import { ApiError, ApiErrorData } from '@/utils/api/types';

const headers = {
	Accept: 'application/json',
};

const kodemyApi = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default kodemyApi;

kodemyApi.interceptors.request.use(
	(config) => {
		config.headers.set(headers);
		return config;
	},
	(error) => Promise.reject(error),
);

kodemyApi.interceptors.response.use(
	(res) => res,
	(error) => {
		if (!error.response) {
			return Promise.reject<ApiError>(ApiError.handle(0, 'Network Error'));
		}

		const { status, data } = error.response;
		const errorData: ApiErrorData = {
			status,
			message: data.message,
			error: data.error,
			timeStamp: new Date(data.timeStamp),
		};

		return Promise.reject<ApiError>(ApiError.handle(status, data.message, errorData));
	},
);
