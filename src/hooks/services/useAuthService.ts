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

	return {
		getMe,
	};
};

export default useAuthService;
