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
	const setDarkMode = () => {
		console.log('Ustawiono ciemny motyw');
		document.querySelector('body').setAttribute('data-theme', 'dark');
	};

	const setLightMode = () => {
		console.log('Ustawiono jasny motyw');
		document.querySelector('body').setAttribute('data-theme', 'light');
	};

	const toggleTheme = (e: any) => {
		if (e.target.checked) setDarkMode();
		else setLightMode();
	};
	return (
		<div onClick={toggleDayNightSwitch} onChange={toggleTheme}>
			{dayNightSwitch ? (
				<BiSun className={IconClassNames} />
			) : (
				<HiOutlineMoon className={IconClassNames} />
			)}
		</div>
	);
};

export default DayNightMode;
