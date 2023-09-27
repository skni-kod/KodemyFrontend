import clsx from 'clsx';
import { CiCircleRemove } from 'react-icons/ci';

type FilterButtonProps = {
	value: string;
};

const FilterButton = ({ value }: FilterButtonProps) => {
	return (
		<div
			className={clsx(
				'flex items-center',
				'p-3 shadow-md border-2 rounded-3xl shrink-0 text-gray-500',
				'border-sky-500 text-sky-500',
			)}
		>
			{value}
			<CiCircleRemove className="text-lg ml-0.5 cursor-pointer" />
		</div>
	);
};

export default FilterButton;
