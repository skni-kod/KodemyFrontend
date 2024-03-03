import React, { useCallback, useContext, useEffect, useState } from 'react';

export type FiltersDict = Record<string, any>;

type FiltersContextType = {
	filters: FiltersDict;
	setFilters: (dict: FiltersDict) => void;
	clearFilters: () => void;
};

export const FiltersContext = React.createContext<FiltersContextType>({
	filters: {},
	setFilters: () => {},
	clearFilters: () => {},
});

const FiltersProvider = ({ children }: { children: React.ReactNode }) => {
	const [filters, setFilters] = useState<FiltersDict>({});

	/*const fastRemoveFilters = (...keys: string[]) => {
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
	};*/

	const modifyFilters = useCallback((dict: FiltersDict) => setFilters(dict), []);

	const clearFilters = () => {
		setFilters({});
	};

	return (
		<FiltersContext.Provider
			value={{
				filters,
				setFilters: modifyFilters,
				clearFilters,
			}}
		>
			{children}
		</FiltersContext.Provider>
	);
};

export const useFiltersContext = () => {
	return useContext(FiltersContext);
};

export default FiltersProvider;
