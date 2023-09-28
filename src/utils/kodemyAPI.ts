import axios from 'axios';

const config = {
	baseURL: process.env.API_BASE_URL,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
};

const kodemyAPI = axios.create(config);

kodemyAPI.interceptors.request.use(
	(config) => config,
	(error) => Promise.reject(error),
);

export default kodemyAPI;
