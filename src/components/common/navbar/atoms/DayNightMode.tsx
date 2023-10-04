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
			document.body.setAttribute('data-theme', 'dark');
			setDayNightSwitch(true);
		} else {
			document.body.setAttribute('data-theme', 'light');
			setDayNightSwitch(false);
		}
	}, []);

	const toggleTheme = () => {
		if (dayNightSwitch) {
			document.body.setAttribute('data-theme', 'light');
			localStorage.setItem('theme', 'light');
		} else {
			document.body.setAttribute('data-theme', 'dark');
			localStorage.setItem('theme', 'dark');
		}
		setDayNightSwitch(!dayNightSwitch);
	};

	return (
		<div onClick={toggleTheme}>
			{dayNightSwitch ? (
				<HiOutlineMoon className={IconClassNames} /> // Zamiana ikon na Moon w dark mode
			) : (
				<BiSun className={IconClassNames} /> // Zamiana ikon na Sun w light mode
			)}
		</div>
	);
};

export default DayNightMode;
