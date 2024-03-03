import { SearchParams } from '@/utils/model';

export default function mapSearchParams<T>({
	size,
	page,
	sort,
	sortDirection,
	searchFields,
}: SearchParams<T>) {
	const params = new URLSearchParams();
	params.set('size', size.toString());
	params.set('page', page.toString());
	params.set('sort', sort);
	params.set('sort_direction', sortDirection);
	searchFields && params.set('search_fields', JSON.stringify(searchFields));
	return params;
}
