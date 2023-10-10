export enum SortDirection {
	DESC,
	ASC,
}

export type SearchFields = {
	phrase?: string;
	id?: number;
	title?: string;
	status?: string;
	createdBy?: string;
	createdDateFrom?: string;
	createdDateTo?: string;
	sectionId?: number;
	categoryId?: number;
	technologyIds?: number[];
};
