type MaterialFiltersParam = {
	phrase?: string;
	id?: number;
	title?: string;
	status?: string;
	createdBy?: string;
	createdDateFrom?: Date;
	createdDateTo?: Date;
	sectionId?: number;
	categoryIds?: number[];
	tagIds?: number[];
	minAvgGrade?: number;
	maxAvgGrade?: number;
};

export default MaterialFiltersParam;
