import { Category, Section } from '@/hooks/services/useSectionService';
import { SearchFields } from '@/utils/model';
import { OpenSearchBase } from '@/hooks/services/useMaterialService';

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

export const mapSearchFieldsParam = (searchFields: SearchFields | undefined) => {
	if (searchFields) {
		const encodedQueryString = Object.entries(searchFields)
			.filter(([key, value]) => value !== undefined)
			.map(([key, value]) => {
				return `"${encodeURIComponent(key)}"%3A${
					Array.isArray(value)
						? value
								.map(String)
								.map((i) => `"${i}"`)
								.join(',')
						: `"${encodeURIComponent(value)}"`
				}`;
			})
			.join(',');
		return encodedQueryString ? `&search_fields=%7B${encodedQueryString}%7D` : '';
	}
	return '';
};

export const openSearchBaseInitialState: OpenSearchBase = {
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