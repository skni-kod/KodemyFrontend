import { useCallback, useEffect, useRef } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';
import { SearchFields, SortDirection } from '@/utils/model';
import { defaultFilterParams } from '@/contexts/MaterialsFiltersContext';
import { mapSearchFieldsParam } from '@/utils/constant';

interface useMaterialServiceProps {
	currentPage?: number;
}

const useMaterialService = ({ currentPage }: useMaterialServiceProps = {}) => {
	const defaultParamsValue = defaultFilterParams;

	const currentPageRef = useRef(currentPage);
	currentPageRef.current = currentPage;

	const getMaterials = useCallback(
		async ({
			size = 10,
			page = currentPageRef.current ? currentPageRef.current - 1 : 0,
			sort = defaultParamsValue.sort,
			sortDirection = SortDirection[defaultParamsValue.sortDirection],
			searchFields = undefined,
		}: OpenSearchParams) => {
			try {
				const basicParams = `size=${size}&page=${page}&sort=${sort}&sort_direction=${sortDirection}`;
				const response = await kodemyAPI.get(
					`/api/materials?${basicParams}${mapSearchFieldsParam(searchFields)}`,
				);
				console.log('response in Material Service', response.data);
				return response.data;
			} catch (e) {
				console.error('getMaterials Error');
			}
		},
		[defaultParamsValue],
	);
	useEffect(() => {}, [currentPage]);

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

export type OpenSearchBase = {
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
	// creator jest podczas kożystania z Material
	creator: {
		id: number;
		username: string;
	};
	createdDate: string;
	sectionId: number;
	categoryId: number;
	technologyIds: number[];
	active: boolean;
	type: {
		id: number;
		name: string;
	};
	// author jest podczas kożystania z MaterialOpenSearch
	author: {
		id: number;
		username: string;
	};
	avgGrade: number;
};

export type MaterialOpenSearch = OpenSearchBase & {
	content: Array<Material>;
};
