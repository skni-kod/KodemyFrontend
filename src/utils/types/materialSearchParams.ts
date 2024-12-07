import { SearchParamsEnhanced } from '@/utils/types/index';

export type MaterialFields = {
	phrase?: string;
	id?: number;
	sectionId?: number;
	categoryIds?: number[];
	minAvgGrade?: number;
	maxAvgGrade?: number;
};

type MaterialSearchParams = SearchParamsEnhanced<MaterialFields>;

export default MaterialSearchParams;
