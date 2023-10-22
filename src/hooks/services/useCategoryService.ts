import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';

export type CategoryDetailsResponse = {
	id: number;
	name: string;
	section: {
		id: number;
		name: string;
	};
};

const useCategoryService = () => {
	const getCategoryDetails = useCallback(async (categoryId: number) => {
		try {
			const response = await kodemyAPI.get(`/api/categories/${categoryId}`);
			return response.data;
		} catch (e) {}
	}, []);

	return { getCategoryDetails };
};

export default useCategoryService;
