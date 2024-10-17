import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { useState } from 'react';

type SelectProps = {
	className?: string;
	label: string;
	value: any[];
	setCurrentValue: (current: number) => void;
};

const Select = ({ className, label, value, setCurrentValue }: SelectProps) => {
	const [isSelectOpen, setIsSelectOpen] = useState(false);

	const handleToggleSelect = () => {
		setIsSelectOpen((isMenuOpen) => !isMenuOpen);
	};

	const handleSetCurrentValue = (current: number) => {
		setIsSelectOpen(false);
		setCurrentValue(current);
	};

	return (
		<div className={`relative ${className}`} onMouseLeave={() => setIsSelectOpen(false)}>
			<div
				className="flex justify-between items-center w-full h-12 px-4 cursor-pointer rounded-sm bg-white2verydarkgrey"
				onClick={handleToggleSelect}
			>
				<div className="no-wrap text-ellipsis overflow-hidden">{label}</div>
				{!isSelectOpen ? (
					<AiOutlineDown className="ml-2" height={24} width={24} />
				) : (
					<AiOutlineUp className="ml-2" height={24} width={24} />
				)}
			</div>
			<div
				className={`absolute left-0 top-full min-w-full z-10 bg-white2verydarkgrey ${
					!isSelectOpen && 'hidden'
				}`}
			>
				<ul className="max-h-none m-0 p-0 overflow-auto cursor-pointer list-none">
					{value.map((current, index) => (
						<li
							key={index}
							className="w-full m-0 py-2.5 px-3 hover:bg-gray-500 hover:text-white2white"
							onClick={() => handleSetCurrentValue(index)}
						>
							{current}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Select;
