import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';
import { defaultFilterParams, SortDirection } from '@/contexts/MaterialsFiltersContext';

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

type OpenSearchParams = {
	size?: number;
	page?: number;
	sort?: string;
	sortDirection?: string;
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
	const defaultParams = defaultFilterParams;

	const getCategoryDetails = useCallback(async (categoryId: number) => {
		try {
			const response = await kodemyAPI.get(`/api/categories/${categoryId}`);
			return response.data;
		} catch (e) {
			console.log(e);
		}
	}, []);

	const getCategoryMaterials = useCallback(
		async (
			categoryId: number,
			{
				size = defaultParams.size,
				page = defaultParams.page,
				sort = defaultParams.sort,
				sortDirection = SortDirection[defaultParams.sortDirection],
			}: OpenSearchParams,
		) => {
			try {
				const searchParams = new URLSearchParams({
					size: size.toString(),
					page: page.toString(),
					sort,
					sort_direction: sortDirection,
				});
				const response = await kodemyAPI.get(
					`/api/categories/${categoryId}/materials?${searchParams.toString()}`,
				);
				return response.data;
			} catch (e) {
				console.log(e);
			}
		},
		[defaultParams],
	);

	return {
		getCategoryDetails,
		getCategoryMaterials,
	};
};

export default useCategoryService;
