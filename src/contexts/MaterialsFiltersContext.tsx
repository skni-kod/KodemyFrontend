import React, { useContext, useEffect, useState } from 'react';
import { SortDirection } from '@/utils/model';
import { capitalizeString } from '@/utils/constant';

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

export const useFiltersContext = () => {
	const { filters, removeFilters } = useContext(MaterialsFiltersContext);
	const [filtersTable, setFiltersTable] = useState<{ key: string; value: string }[]>([]);

	useEffect(() => {
		const localFiltersTable = new Array<{ key: string; value: string }>();
		Object.entries(filters).forEach(([key, filter]) => {
			switch (key) {
				case 'sort_direction':
					return;
				case 'sort':
					const order = capitalizeString(`${filters['sort_direction'].lang?.value}`);
					localFiltersTable.push({
						key,
						value: `${filter.lang?.key}: ${filter.lang?.value} (${order})`,
					});
					break;
				default:
					localFiltersTable.push({
						key,
						value: `${filter.lang?.key}: ${filter.lang?.value}`,
					});
			}
		});
		setFiltersTable(localFiltersTable.sort((a, b) => a.key.localeCompare(b.key)));
	}, [filters]);

	return { filters: filtersTable, removeFilters, filterRecords: filters };
};

export default MaterialsFiltersProvider;
