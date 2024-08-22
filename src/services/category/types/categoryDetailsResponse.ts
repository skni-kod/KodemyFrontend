import { Section } from '@/services/section/types/section';

type CategoryDetailsResponse = {
	id: number;
	name: string;
	section: Section;
};

export default CategoryDetailsResponse;
