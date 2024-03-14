import { useCallback } from 'react';
import kodemyAPI from '@/utils/kodemyAPI';
import { MaterialSearchFields, SearchParams } from '@/utils/model';
import mapSearchParams from '@/utils/mapSearchParams';

const useMaterialService = () => {
	const getMaterials = useCallback(async (params: SearchParams<MaterialSearchFields>) => {
		try {
			const response = await kodemyAPI.get(`/api/materials?${mapSearchParams(params)}`);
			return response.data;
		} catch (e) {}
	}, []);

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
	tags: { id: number; name: string }[];
};
