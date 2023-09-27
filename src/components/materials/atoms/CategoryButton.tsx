import clsx from 'clsx';

type CategoryButtonProps = {
	value: string;
	selected?: boolean;
};

const CategoryButton = ({ value, selected = false }: CategoryButtonProps) => {
	return (
		<div
			className={clsx(
				'p-3 shadow-md border-2 rounded-3xl shrink-0 text-gray-500',
				!selected
					? 'border-gray-500 text-gray-500'
					: 'border-sky-500 text-sky-500',
			)}
		>
			{value}
		</div>
	);
};

export default CategoryButton;
