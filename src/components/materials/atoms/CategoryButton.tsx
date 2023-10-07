import clsx from 'clsx';

type CategoryButtonProps = {
	value: string;
	selected?: boolean;
};

const CategoryButton = ({ value, selected = false }: CategoryButtonProps) => {
	return (
		<div
			className={clsx(
				'p-3 shadow-md border-2 rounded-3xl shrink-0 cursor-pointer',
				!selected
					? 'border-black2white text-black2white'
					: 'border-sky-500 text-sky-500',
			)}
		>
			{value}
		</div>
	);
};

export default CategoryButton;
