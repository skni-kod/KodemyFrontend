import { SearchParams } from '@/utils/types/index';

type SearchParamsEnhanced<T> = SearchParams<T> & {
	page: number;
	size: number;
	sort: number;
	fields: T;
};

export default SearchParamsEnhanced;
