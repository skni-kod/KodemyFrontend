import { ParsedUrlQuery } from 'querystring';
import { defaultPageSizes, FiltersDict } from '@/contexts/FiltersContext';

export const SIZE_PARAM = 'size';
export const PAGE_PARAM = 'page';
export const SORT_PARAM = 'sort';
export const SORT_DIRECTION_PARAM = 'sort_dir';
export const CATEGORY_IDS_PARAM = 'category';

const DEFAULT_PAGE_SIZES = [10, 20, 40];

function mapSize(query: ParsedUrlQuery) {
	if (query[SIZE_PARAM]) {
		const size = parseInt(query[SIZE_PARAM] as string);
		if (!isNaN(size) && size >= 0 && DEFAULT_PAGE_SIZES.includes(size)) return size;
	}
	return undefined;
}

function mapPage(query: ParsedUrlQuery) {
	if (query[PAGE_PARAM]) {
		const page = parseInt(query[PAGE_PARAM] as string);
		if (!isNaN(page) && page > 0) return page - 1;
	}
	return undefined;
}

function mapSortDirection(query: ParsedUrlQuery) {
	var sortDirection = query[SORT_DIRECTION_PARAM];
	return sortDirection && sortDirection === 'asc' ? 'ASC' : 'DESC';
}

function mapBasic(query: ParsedUrlQuery) {
	return {
		[SIZE_PARAM]: mapSize(query),
		[PAGE_PARAM]: mapPage(query),
		[SORT_DIRECTION_PARAM]: mapSortDirection(query),
	};
}

export function mapForMaterials(query: ParsedUrlQuery): FiltersDict {
	const filters: FiltersDict = mapBasic(query);
	if (query[CATEGORY_IDS_PARAM]) filters[CATEGORY_IDS_PARAM] = query[CATEGORY_IDS_PARAM];
	return filters;
}

export function mapForUsers(query: ParsedUrlQuery): FiltersDict {
	return mapBasic(query);
}