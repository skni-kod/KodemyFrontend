import FiltersMenu from '@/components/common/filter/organisms/FiltersMenu';
import { useCallback, useContext, useState } from 'react';
import { FiltersContext } from '@/contexts/FiltersContext';
import { SearchFields, SortDirection } from '@/utils/model';

const useFiltersMenu = () => {
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
	const { filters } = useContext(FiltersContext);

	const mapFilters = useCallback(
		(searchFields?: SearchFields) => {
			const size = filters['size']?.value;
			const page = filters['page']?.value;
			const sort = filters['sort']?.value;
			const sortDirection = SortDirection[filters['sort_direction']?.value];
			const concatSearchFields = {
				...searchFields,
				status: filters['status']?.value,
				phrase: filters['phrase']?.value,
			};
			return {
				size,
				page,
				sort,
				sortDirection,
				searchFields: concatSearchFields,
			};
		},
		[filters],
	);

	return {
		FiltersMenu,
		filters: mapFilters,
		isFilterMenuOpen,
		setIsFilterMenuOpen,
	};
};

export default useFiltersMenu;
