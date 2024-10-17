import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';
import { MaterialSearchFields, SortDirection } from '@/utils/model';
import { defaultFilterParams } from '@/contexts/FiltersContext';
import { mapSearchFieldsParam } from '@/utils/constant';
import { Pageable } from '@/utils/model/Pageable';

const useMaterialService = () => {
	const defaultParamsValue = defaultFilterParams;

	const getMaterials = useCallback(
		async ({
			size = defaultParamsValue.size,
			page = defaultParamsValue.page,
			sort = defaultParamsValue.sort,
			sortDirection = SortDirection[defaultParamsValue.sortDirection],
			searchFields = undefined,
		}: OpenSearchParams) => {
			try {
				const basicParams = `size=${size}&page=${page}&sort=${sort}&sort_direction=${sortDirection}`;
				const response = await kodemyAPI.get(
					`/api/materials?${basicParams}${mapSearchFieldsParam(searchFields)}`,
				);
				return response.data;
			} catch (e) {}
		},
		[defaultParamsValue],
	);

	const getMaterialById = useCallback(async (id: number) => {
		try {
			const response = await kodemyAPI.get(`/api/materials/${id}`);
			return response.data;
		} catch (e) {}
	}, []);

	return {
		getMaterials,
		getMaterialById,
	};
};

export default useMaterialService;

type OpenSearchParams = {
	size?: number;
	page?: number;
	sort?: string;
	sortDirection?: string;
	searchFields?: MaterialSearchFields;
};

export enum MaterialStatus {
	PENDING,
	APPROVED,
	EDITED,
	REJECTED,
	BANNED,
}

export type Material = {
	id: number;
	title: string;
	description: string;
	link: string;
	status: string;
	active: boolean;
	avgGrade: number;
	author: {
		id: number;
		username: string;
	};
	createdDate: string;
	sectionId: number;
	categoryId: number;
	technologies: { id: number; name: string }[];
};
