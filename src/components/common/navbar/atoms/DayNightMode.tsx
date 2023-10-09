import { BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import { ThemeMode, useThemeStore } from '@/store/themeSlice';

const DayNightMode = () => {
	const { themeMode, toggleTheme } = useThemeStore();
	const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
	const IconClassNames = 'cursor-pointer text-grey2white text-2xl h-[25.5px] w-[25.5px]';

	useEffect(() => {
		setIsDarkTheme(themeMode === ThemeMode.dark);
	}, [themeMode]);

	return (
		<div onClick={toggleTheme}>
			{isDarkTheme ? (
				<HiOutlineMoon className={IconClassNames} />
			) : (
				<BiSun className={IconClassNames} />
			)}
		</div>
	);
};

export default DayNightMode;
