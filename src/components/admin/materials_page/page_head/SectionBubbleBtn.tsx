import clsx from 'clsx';
import { FaAngleDown } from 'react-icons/fa6';

type SectionBubbleBtnProps = {
	name: string;
	onClick: () => void;
	selected?: boolean;
};

export default function SectionBubbleBtn({
	name,
	onClick,
	selected = false,
}: SectionBubbleBtnProps) {
	return (
		<div
			onClick={onClick}
			className={clsx(
				'flex items-center p-3 shadow-md border-2 rounded-3xl shrink-0 cursor-pointer',
				!selected
					? 'border-black2white text-black2white hover:border-gray-500 hover:text-gray-500'
					: 'border-sky-500 text-sky-500',
			)}
		>
			{name}
			<FaAngleDown width={40} height={40} className="ml-1.5" />
		</div>
	);
}
