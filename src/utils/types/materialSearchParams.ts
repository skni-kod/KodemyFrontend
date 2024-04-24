import { SearchParamsEnhanced } from '@/utils/types/index';

export type MaterialFields = {
	phrase?: string;
	categoryIds?: number[];
	grade?: number;
};

type MaterialSearchParams = SearchParamsEnhanced<MaterialFields>;

export default MaterialSearchParams;
