import clsx from 'clsx';

type HeaderButtonProps = {
	name: string;
	onClick: () => void;
	selected?: boolean;
};

const HeaderButton = ({ name, onClick, selected = false }: HeaderButtonProps) => {
	return (
		<div
			onClick={onClick}
			className={clsx(
				'p-3 shadow-md border-2 rounded-3xl shrink-0 cursor-pointer',
				!selected
					? 'border-black2white text-black2white hover:border-gray-500 hover:text-gray-500'
					: 'border-sky-500 text-sky-500',
			)}
		>
			{name}
		</div>
	);
};

export default HeaderButton;
