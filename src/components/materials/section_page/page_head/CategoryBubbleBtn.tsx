import clsx from 'clsx';

type CategoryBubbleBtnProps = {
	name: string;
	onClick: () => void;
	selected?: boolean;
};

export default function CategoryBubbleBtn({
	name,
	onClick,
	selected = false,
}: CategoryBubbleBtnProps) {
	return (
		<div
			onClick={onClick}
			className={clsx(
				'p-3 shadow-md border-2 rounded-3xl shrink-0 cursor-pointer',
				!selected
					? 'border-overlay2bg text-secondary hover:border-placeholder2bg'
					: 'border-primary text-primary',
			)}
		>
			{name}
		</div>
	);
}
