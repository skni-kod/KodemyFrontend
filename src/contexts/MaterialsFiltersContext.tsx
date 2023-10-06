import React, { useState } from 'react';

export type Filter = {
	key: string;
	value: string | number;
};

export const MaterialsFiltersContext = React.createContext({
	filters: new Array<Filter>(),
	addFilter: (filter: Filter) => {},
	removeFilter: (key: string) => {},
	clearFilters: () => {},
});

const MaterialsFiltersProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [filters, setFilters] = useState<Filter[]>([]);

	const handleAddFilter = (filter: Filter) => {
		setFilters([filter, ...filters]);
	};

	const handleRemoveFilter = (key: string) => {
		setFilters(filters.filter((f) => f.key !== key));
	};

	const handleClearFilters = () => {
		setFilters([]);
	};

	return (
		<MaterialsFiltersContext.Provider
			value={{
				filters,
				addFilter: handleAddFilter,
				removeFilter: handleRemoveFilter,
				clearFilters: handleClearFilters,
			}}
		>
			{children}
		</MaterialsFiltersContext.Provider>
	);
};

export default MaterialsFiltersProvider;
