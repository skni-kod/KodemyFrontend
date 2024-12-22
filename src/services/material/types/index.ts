export type MaterialTag = {
	id: number;
	name: string;
};

export type MaterialType = {
	id: number;
	name: string;
};

enum MaterialStatus {
	PENDING = 'PENDING',
	APPROVED = 'APPROVED',
	EDITED = 'EDITED',
	REJECTED = 'REJECTED',
	BANNED = 'BANNED',
}

export type Material = {
	id: number;
	title: string;
	description: string;
	link: string;
	status: MaterialStatus;
	type: MaterialType;
	tags: MaterialTag[];
	averageGrade: number;
	gradeStats: number[];
	author: {
		id: number;
		username: string;
	};
	createdDate: Date;
};

export type MaterialAdd = {
	title: string;
	description: string;
	link: string;
	typeId: number;
	categoryId: number;
	tagsIds: number[];
};

export type MaterialAddGrade = {
	grade: string;
};

export type MaterialFiltersParam = {
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

export type MaterialSearch = {
	id: number;
	title: string;
	description: string;
	status: MaterialStatus;
	isActive: boolean;
	avgGrade: number;
	author: {
		id: number;
		username: string;
	};
	createdDate: Date;
	sectionId: number;
	categoryId: number;
	tags: MaterialTag[];
};

export enum MaterialSortField {
	TITLE,
	ID,
	DESCRIPTION,
	STATUS,
	IS_ACTIVE,
	AVG_GRADE,
	AUTHOR,
	CREATED_DATE,
	SECTION_ID,
	CATEGORY_ID,
}
