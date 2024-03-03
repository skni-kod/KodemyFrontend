import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';
import { SearchFields } from '@/utils/model';
import { mapSearchFieldsParam } from '@/utils/constant';

const useMaterialService = () => {
	const getMaterials = useCallback(
		async ({ size, page, sort, sortDirection, searchFields }: OpenSearchParams) => {
			try {
				const basicParams = `size=${size}&page=${page}&sort=${sort}&sort_direction=${sortDirection}`;
				const response = await kodemyAPI.get(
					`/api/materials?${basicParams}${mapSearchFieldsParam(searchFields)}`,
				);
				return response.data ? response.data : [];
			} catch (e) {}
		},
		[],
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
	searchFields?: SearchFields;
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
