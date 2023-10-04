import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';

const useMaterialService = () => {
	const getMaterialById = useCallback(async (id: number) => {
		try {
			const response = await kodemyAPI.get(`/api/materials/${id}`);
			return response.data;
		} catch (e) {
			console.log(e);
		}
	}, []);

	return {
		getMaterialById,
	};
};

export default useMaterialService;
