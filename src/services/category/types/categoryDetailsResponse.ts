import { Section } from '@/services/section/types';

type CategoryDetailsResponse = {
	id: number;
	name: string;
	section: Section;
};

export default CategoryDetailsResponse;
