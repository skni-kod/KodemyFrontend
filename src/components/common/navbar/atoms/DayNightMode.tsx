import { BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi2';
import { useState, useEffect } from 'react';

const DayNightMode = () => {
	const IconClassNames =
		'cursor-pointer text-icon text-2xl h-[25.5px] w-[25.5px]';

	const [dayNightSwitch, setDayNightSwitch] = useState(false);

	useEffect(() => {
		toggleTheme();
	}, []);

	const toggleTheme = () => {
		if (dayNightSwitch) {
			document.body.setAttribute('data-theme', 'light');
			localStorage.setItem('data-theme', 'light');
		} else {
			document.body.setAttribute('data-theme', 'dark');
			localStorage.setItem('data-theme', 'dark');
		}
		setDayNightSwitch(!dayNightSwitch);
	};

	return (
		<div onClick={toggleTheme}>
			{dayNightSwitch ? (
				<HiOutlineMoon className={IconClassNames} />
			) : (
				<BiSun className={IconClassNames} />
			)}
		</div>
	);
};

export default DayNightMode;
