import { BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi2';
import { useState, useEffect } from 'react';

const DayNightMode = () => {
	const IconClassNames =
		'cursor-pointer text-gray-400 text-2xl h-[25.5px] w-[25.5px]';

	const [dayNightSwitch, setDayNightSwitch] = useState(false);

	useEffect(() => {
		const currentTheme = localStorage.getItem('theme');
		if (currentTheme === 'dark') {
			setDayNightSwitch(true);
		}
	}, []);

	const toggleDayNightSwitch = () => {
		setDayNightSwitch(!dayNightSwitch);
	};

	const setDarkMode = () => {
		console.log('Ustawiono ciemny motyw');
		document.querySelector('body').setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	};

	const setLightMode = () => {
		console.log('Ustawiono jasny motyw');
		document.querySelector('body').setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	};

	const toggleTheme = () => {
		if (dayNightSwitch) {
			setLightMode();
		} else {
			setDarkMode();
		}
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
