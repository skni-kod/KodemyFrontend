import clsx from 'clsx';

type PaginatorPageBtnProps = {
	className?: string;
	onClick: () => void;
	visible?: boolean;
	selected: boolean;
	children: React.ReactNode;
};

const classNames = 'h-10 p-2 border-2 rounded-2xl shrink-0 shadow-md cursor-pointer';

export function PaginatorBtn({
	className,
	onClick,
	visible = true,
	selected = false,
	children,
}: PaginatorPageBtnProps) {
	return (
		<>
			{visible && (
				<button
					className={clsx(
						className,
						selected ? 'border-primary' : '',
						classNames,
					)}
					onClick={onClick}
				>
					{children}
				</button>
			)}
		</>
	);
}
