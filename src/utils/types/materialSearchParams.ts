import SearchParams from '@/utils/types/searchParams';

export type MaterialFields = {
	phrase?: string;
	categoryIds?: number[];
	grade?: number;
};

type MaterialSearchParams = SearchParams<MaterialFields>;

export default MaterialSearchParams;
