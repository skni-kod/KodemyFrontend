import SortDirection from '@/utils/api/types/sortDirection';

type SearchRequestParams<S, T> = {
	size: number;
	page: number;
	sort: S;
	sort_direction: SortDirection;
	filters?: T;
};

export default SearchRequestParams;
