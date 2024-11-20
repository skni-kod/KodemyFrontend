import clsx from 'clsx';

type CategoryBubbleBtnProps = {
	id?: number;
	name: string;
	onClick: () => void;
	selected?: boolean;
};

export default function CategoryBubbleBtn({ name, onClick, selected = false }: CategoryBubbleBtnProps) {
	return (
		<div
			onClick={onClick}
			className={clsx(
				'text-semibold shrink-0 cursor-pointer rounded-3xl border-2 bg-bg p-3 shadow-md hover:bg-bgHover',
				selected ? 'border-primary text-primary' : 'text-secondary',
			)}
		>
			{name}
		</div>
	);
}
