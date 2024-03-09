import { Category, Section } from '@/hooks/services/useSectionService';
import { Pageable } from '@/utils/model/Pageable';

export const sortSectionCategory = (section: Section[]) => {
	section?.forEach((section: Section) => {
		sortCategories(section.categories);
	});
	return section;
};

export const sortCategories = (categories: Category[]) =>
	categories?.sort((a: Category, b: Category) => a.id - b.id);

export const extractRRRRMMDD = (date: string) => {
	const dateSplit = date.split('T');
	return dateSplit.length > 0 ? dateSplit[0] : date;
};

export const capitalizeString = (str: string) =>
	str?.charAt(0).toUpperCase() + str?.slice(1).toLowerCase();

export const pageInitialState: Pageable<any> = {
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
