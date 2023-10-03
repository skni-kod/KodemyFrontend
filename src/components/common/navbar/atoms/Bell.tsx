import { BiBell } from 'react-icons/bi';

type BellProps = {
	className: string;
};

const Bell = ({ className }: BellProps) => {
	return (
		<button className="relative">
			<BiBell className={className} />
			<div className="bg-yellow-300 absolute bottom-0.5 right-0.5 w-2 h-2 rounded-md"></div>
		</button>
	);
};

export default Bell;
