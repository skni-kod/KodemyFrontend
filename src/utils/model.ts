export enum SortDirection {
	DESC,
	ASC,
}

export type SearchParams<T> = {
	size: number;
	page: number;
	sort: string;
	sortDirection: 'ASC' | 'DESC';
	searchFields?: T;
};

export type MaterialSearchFields = {
	phrase?: string;
	id?: number;
	title?: string;
	status?: string;
	createdBy?: string;
	createdDateFrom?: string;
	createdDateTo?: string;
	sectionId?: number;
	categoryIds?: number[];
	technologyIds?: number[];
};

export type UserSearchFields = {
	username?: string;
	email?: string;
	role?: string;
};
