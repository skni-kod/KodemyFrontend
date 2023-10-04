import { BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi2';
import { useState } from 'react';

const DayNightMode = () => {
	const IconClassNames =
		'cursor-pointer text-gray-400 text-2xl h-[25.5px] w-[25.5px]';

	const [dayNightSwitch, setdayNightSwitch] = useState(false);
	const toggleDayNightSwitch = () => {
		setdayNightSwitch(!dayNightSwitch);
	};

	return (
		<div onClick={toggleDayNightSwitch}>
			{dayNightSwitch ? (
				<BiSun className={IconClassNames} />
			) : (
				<HiOutlineMoon className={IconClassNames} />
			)}
		</div>
	);
};

export default DayNightMode;
