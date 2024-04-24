type SearchParams<T> = {
	page?: number;
	size?: number;
	sort?: number;
	fields?: T;
};

export default SearchParams;
