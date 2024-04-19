import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';
import { SearchParams, UserSearchFields } from '@/utils/model';
import mapSearchParams from '@/utils/mapSearchParams';

const useUserService = () => {
	const getUsers = useCallback(async (params: SearchParams<UserSearchFields>) => {
		try {
			console.log(params);
			const response = await kodemyAPI.get(`/api/users?${mapSearchParams(params)}`);

			return response.data;
		} catch (e) {}
	}, []);

	const getUserById = useCallback(async (id: number) => {
		try {
			const response = await kodemyAPI.get<User>(`/api/materials/${id}`);
			return response.data;
		} catch (e) {}
	}, []);

	return {
		getUsers,
		getUserById,
	};
};

export default useUserService;

export type User = {
	id: number;
	username: string;
	email: string;
	photo: string;
	createdDate: string;
	role: { id: number; name: string };
};
