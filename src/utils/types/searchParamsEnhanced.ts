import { SearchParams } from '@/utils/types/index';
import { SortDirection } from '@/utils/api/types';

type SearchParamsEnhanced<T> = SearchParams<T> & {
	page: number;
	size: number;
	sort: number;
	sort_direction: SortDirection;
	fields: T;
};

export default SearchParamsEnhanced;
