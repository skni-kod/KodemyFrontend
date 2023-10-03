export type Material = {
	id: number;
	title: string;
	description: string;
	link: string;
	status: string;
	user: string;
	createdDate: string;
	categoryId: number;
	active: boolean;
};

export type CategoryMaterialResponse = {
	content: Array<Material>;
};