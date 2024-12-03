import { ApiService, Pageable, SearchRequestParams, SortDirection } from '@/utils/api/types';
import { Material, MaterialFiltersParam, MaterialSearch, MaterialSortField } from '@/services/material/types';
import kodemyApi from '@/utils/api';
import { InternalServerErrorApiError } from '@/utils/api/types/apiError';
import MaterialAdd from './types/materialAdd';
import MaterialAddGrade from '@/services/material/types/materialAddGrade';

export const MaterialSwaggerStatuses = {
	APPROVED: 'APPROVED',
	PENDING: 'PENDING',
	DRAFT: 'DRAFT',
	REJECTED: 'REJECTED',
	BAN_REQUESTED: 'BAN_REQUESTED',
	BANNED: 'BANNED',
	DEPRECATION_REQUEST: 'DEPRECATION_REQUEST',
	DEPRECATED: 'DEPRECATED',
	DELETED: 'DELETED',
} as const;

export type MaterialSwaggerStatus = keyof typeof MaterialSwaggerStatuses;

export default class MaterialService extends ApiService {
	public static async getMaterials(
		params: SearchRequestParams<MaterialSortField, MaterialFiltersParam>,
	): Promise<Pageable<MaterialSearch>> {
		const { size, page, sort, sort_direction, filters } = params;

		const requestParams = new URLSearchParams({
			size: size.toString(),
			page: page > 0 ? (page - 1).toString() : '0',
			sort: MaterialSortField[sort],
			sort_direction: SortDirection[sort_direction],
			filters: filters ? JSON.stringify(filters) : '{}',
		});

		try {
			return await kodemyApi.get<Pageable<MaterialSearch>>(`/api/materials?${requestParams}`).then((res) => res.data);
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}

	public static async getMaterialById(id: number): Promise<Material> {
		try {
			return await kodemyApi.get<Material>(`/api/materials/${id}`).then((res) => res.data);
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}

	public static async publishMaterial(material: MaterialAdd): Promise<MaterialAdd> {
		try {
			const response = await kodemyApi.post<MaterialAdd>('/api/materials', material);
			return response.data;
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}

	public static async addGradeToMaterial(materialId: number, grade: MaterialAddGrade): Promise<MaterialAddGrade> {
		try {
			const response = await kodemyApi.post<MaterialAddGrade>(`/api/materials/${materialId}/grades`, grade);
			return response.data;
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}

	public static async changeMaterialStatus(materialId: number, newStatus: MaterialSwaggerStatus): Promise<Material> {
		try {
			const response = await kodemyApi.post<Material>(`/api/materials/${materialId}/status`, { status: newStatus });
			return response.data;
		} catch (err) {
			return Promise.reject(new InternalServerErrorApiError());
		}
	}
}
