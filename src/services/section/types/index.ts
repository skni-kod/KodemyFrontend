export type Category = {
	id: number;
	name: string;
};

export type Section = {
	id: number;
	name: string;
	categories: Category[];
};

export type SectionResponse = Section[];
