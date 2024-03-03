import axios from 'axios';

const config = {
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
};

const kodemyAPI = axios.create(config);

kodemyAPI.interceptors.request.use(
	(config) => {
		console.debug('Sending request to:', config.url);
		return config;
	},
	(error) => {
		console.error('Error occurred while sending request:', error);
		return Promise.reject(error);
	},
);

export default kodemyAPI;
