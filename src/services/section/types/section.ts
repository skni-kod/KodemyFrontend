import Category from '@/services/section/types/category';

type Section = {
	id: number;
	name: string;
	categories: Category[];
};

export default Section;
