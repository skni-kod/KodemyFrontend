import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';

const useAuthService = () => {
	const getMe = useCallback(async () => {
		try {
			const response = await kodemyAPI.get('/api/users/me', {
				withCredentials: true,
			});
			return response.data;
		} catch (e) {}
	}, []);

	const checkAuth = useCallback(async () => {
		try {
			const response = await kodemyAPI.get('/api/oauth2', {
				withCredentials: true,
			});
			return response.data.auth;
		} catch (e) {}
	}, []);

	return {
		getMe,
		checkAuth,
	};
};

export default useAuthService;
