import React, { useState } from 'react';
import { SortDirection } from '@/utils/model';

export type Filter<T> = {
	field: string;
	value: T;
	lang?: FilterLang;
};

type FilterLang = {
	key: string;
	value: string | number | undefined;
};

export const defaultPageSizes = [10, 20, 40];

export const defaultFilterParams = {
	size: 10,
	page: 0,
	sort: 'createdDate',
	sortDirection: SortDirection.DESC,
};

type MaterialsFiltersContextType = {
	filters: Record<string, Filter<any>>;
	addFilters: (...filter: Filter<any>[]) => void;
	removeFilters: (...filterKey: string[]) => void;
	clearFilters: () => void;
};

export const MaterialsFiltersContext = React.createContext<MaterialsFiltersContextType>({
	filters: {},
	addFilters: () => {},
	removeFilters: () => {},
	clearFilters: () => {},
});

const MaterialsFiltersProvider = ({ children }: { children: React.ReactNode }) => {
	const [filters, setFilters] = useState<Record<string, Filter<any>>>({});

	const fastRemoveFilters = (...keys: string[]) => {
		const newFilters = { ...filters };
		keys.forEach((key) => {
			delete newFilters[key];
		});
		return newFilters;
	};

	const addFilters = (...filters: Filter<any>[]) => {
		const keysToRemove = filters.map((filter) => filter.field);
		setFilters(() => {
			const updatedFilters = { ...fastRemoveFilters(...keysToRemove) };
			filters.forEach((filter) => {
				updatedFilters[filter.field] = filter;
			});
			return updatedFilters;
		});
	};

	const removeFilters = (...filterKey: string[]) => {
		setFilters(fastRemoveFilters(...filterKey));
	};

	const clearFilters = () => {
		setFilters({});
	};

	return (
		<MaterialsFiltersContext.Provider
			value={{
				filters,
				addFilters,
				removeFilters,
				clearFilters,
			}}
		>
			{children}
		</MaterialsFiltersContext.Provider>
	);
};

export default MaterialsFiltersProvider;