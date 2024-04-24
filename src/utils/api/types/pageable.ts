type Pageable<T> = {
	content: T[];
	pageable: {
		offset: number;
		pageNumber: number;
		pageSize: number;
		paged: boolean;
	};
	size: number;
	totalElements: number;
	totalPages: number;
};

export default Pageable;

export const pageableConstant: Pageable<any> = {
	content: [],
	size: 20,
	pageable: {
		offset: 0,
		pageNumber: 0,
		pageSize: 20,
		paged: true,
	},
	totalPages: 1,
	totalElements: 0,
};
