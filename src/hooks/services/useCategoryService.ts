import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';

export type Material = {
	id: number;
	title: string;
	description: string;
	link: string;
	status: string;
	user: string;
	createdDate: string;
	categoryId: number;
	active: boolean;
};

type OpenSearchResponse = {
	content: Array<any>;
	pageable: {
		offset: number;
		pageNumber: number;
		pageSize: number;
		paged: boolean;
	};
	size: number;
	totalElements: number;
	totalPages: number;
};

export type CategoryMaterialsResponse = OpenSearchResponse & {
	content: Array<Material>;
};

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
