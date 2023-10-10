import clsx from 'clsx';
import { CiCircleRemove } from 'react-icons/ci';
import { useContext } from 'react';
import { MaterialsFiltersContext } from '@/contexts/MaterialsFiltersContext';

const FilterButton = ({ value }: { value: { key: string; value: string } }) => {
	const { removeFilters } = useContext(MaterialsFiltersContext);

	return (
		<div
			className={clsx(
				'flex items-center',
				'p-3 shadow-md border-2 rounded-3xl shrink-0 text-gray-500',
				'border-sky-500 text-sky-500',
			)}
		>
			{value.value}
			<CiCircleRemove
				className="text-lg ml-0.5 cursor-pointer"
				onClick={() => removeFilters(value.key)}
			/>
		</div>
	);
};

export default FilterButton;
