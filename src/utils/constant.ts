import { Category, Section } from '@/hooks/services/useSectionService';

export const sortSectionCategory = (section: Section[]) => {
	section.forEach((section: Section) => {
		sortCategories(section.categories);
	});
	return section;
};

export const sortCategories = (categories: Category[]) => {
	return categories.sort((a: Category, b: Category) => a.id - b.id);
};

export const extractRRRRMMDD = (date: string) => {
	const dateSplit = date.split('T');
	return dateSplit.length > 0 ? dateSplit[0] : date;
};
