import React, { useState, useEffect } from 'react';
import { TfiMenu } from 'react-icons/tfi';
import LogoDesktop from './atoms/LogoDesktop';
import LogoPhone from './atoms/LogoPhone';
import SearchBarDesktop from '@/components/common/navbar/organisms/SearchBarDesktop';
import UserBar from '@/components/common/navbar/organisms/Desktop/UserBar';
import Link from 'next/link';
import { pageHomeRoute } from '@/pages';
import PhoneDropDownMenu from './organisms/Phone/PhoneDropDownMenu';

const Navbar = () => {
	const IconClassNames = 'text-grey2white text-2xl h-[25.5px] w-[25.5px]';

	const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
	const toggleNotificationsMenu = () => {
		setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
	};
	const [windowWidth, setWindowWidth] = useState<number>(
		typeof window !== 'undefined' ? window.innerWidth : 0,
	);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);
	useEffect(() => {
		if (windowWidth > 768) {
			setIsNotificationsMenuOpen(false);
		}
	}, [windowWidth]);

	return (
		<nav className="fixed top-0 w-full left-0 bg-white2darkgrey flex items-center justify-between px-7 py-1.5 md:py-3 z-20 shadow-md">
			<div className="flex items-center gap-x-[10px] text-2xl font-semibold text-blue-500">
				<Link href={pageHomeRoute()} className="flex items-center">
					<LogoDesktop height={44} theme={'light'} visibility={'hidden'} />
					<LogoPhone height={44} theme={'light'} />
				</Link>
			</div>
			<SearchBarDesktop />
			<UserBar />
			<TfiMenu
				onClick={toggleNotificationsMenu}
				className={`${IconClassNames} block md:hidden cursor-pointer relative`}
			/>
			{isNotificationsMenuOpen && <PhoneDropDownMenu />}
		</nav>
	);
};

export default Navbar;
