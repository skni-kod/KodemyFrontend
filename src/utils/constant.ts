import { Category, Section } from '@/hooks/services/useSectionService';

export const sortSectionCategory = (section: Section[]) => {
	section.forEach((section: Section) => {
		section.categories.sort((a: Category, b: Category) => a.id - b.id);
	});
	return section;
};
