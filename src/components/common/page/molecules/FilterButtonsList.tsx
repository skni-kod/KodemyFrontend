import FilterButton from '@/components/common/page/atoms/FilterButton';
import { useFiltersContext } from '@/contexts/MaterialsFiltersContext';

const FilterButtonsList = () => {
	const { filters, removeFilters } = useFiltersContext();

	return (
		<>
			{filters.length > 0 && (
				<div className="flex items-center w-full gap-4 pt-4 px-4 text-sm text-semibold text-center">
					{filters.map(({ key, value }, index) => (
						<FilterButton
							key={index}
							value={value}
							handleRemove={() => {
								removeFilters(key);
							}}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default FilterButtonsList;
