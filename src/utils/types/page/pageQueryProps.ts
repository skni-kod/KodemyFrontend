type PageQueryProps<T> = {
	params: Promise<{ [key: string]: any }>;
	searchParams?: Promise<T>;
};

export default PageQueryProps;
