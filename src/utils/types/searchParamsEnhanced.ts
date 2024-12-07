import { SortDirection } from '@/utils/api/types';
import { SearchParams } from '@/utils/types/index';

type SearchParamsEnhanced<T> = SearchParams<T> & {
	page: number;
	size: number;
	sort: number;
	sort_direction: SortDirection;
	fields: T;
};

export default SearchParamsEnhanced;
