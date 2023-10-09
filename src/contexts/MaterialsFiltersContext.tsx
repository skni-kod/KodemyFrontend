import React, { useState } from 'react';

export enum SortDirection {
	DESC,
	ASC,
}

export type Filters = {
	size?: number;
	page?: number;
	sort?: string;
	sort_direction?: SortDirection;
};

export const defaultFilters: Filters = {
	size: 15,
	page: 0,
	sort: 'createdDate',
	sort_direction: SortDirection.DESC,
};

export const defaultPages = [10, 20, 40];

type MaterialsFiltersContextType = {
	filters: Filters;
	updateSizeFilter: (size: number | undefined) => void;
	updatePageFilter: (page: number | undefined) => void;
	updateSortFilter: (sort: string | undefined, sortDirection: SortDirection | undefined) => void;
	clearFilters: () => void;
};

export const MaterialsFiltersContext = React.createContext<MaterialsFiltersContextType>({
	filters: {},
	updateSizeFilter: () => {},
	updatePageFilter: () => {},
	updateSortFilter: () => {},
	clearFilters: () => {},
});

const MaterialsFiltersProvider = ({ children }: { children: React.ReactNode }) => {
	const [filters, setFilters] = useState<Filters>({});

	const updateSizeFilter = (size: number | undefined) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			size: size,
		}));
	};

	const updatePageFilter = (page: number | undefined) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			page: page,
		}));
	};

	const updateSortFilter = (sort: string | undefined, sortDirection: SortDirection | undefined) => {
		setFilters((prevFilters) => ({
			...prevFilters,
			sort: sort,
			sort_direction: sortDirection,
		}));
	};

	const clearFilters = () => {
		setFilters({});
	};

	return (
		<MaterialsFiltersContext.Provider
			value={{
				filters,
				updateSizeFilter,
				updatePageFilter,
				updateSortFilter,
				clearFilters,
			}}
		>
			{children}
		</MaterialsFiltersContext.Provider>
	);
};

export default MaterialsFiltersProvider;
