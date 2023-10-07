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

	// Hook do śledzenia szerokości okna przeglądarki
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		// Funkcja obsługi zmiany szerokości okna
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		// Dodajmy słuchacza zdarzeń do śledzenia zmiany szerokości okna
		window.addEventListener('resize', handleResize);

		// Usuń słuchacza zdarzeń po odmontowaniu komponentu
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Automatycznie zamknij menu po przekroczeniu szerokości 768px
	useEffect(() => {
		if (windowWidth > 768) {
			setIsNotificationsMenuOpen(false);
		}
	}, [windowWidth]);

	return (
		<nav className="fixed top-0 w-full left-0 bg-white2darkgrey flex items-center justify-between px-7 py-1.5 md:py-3 z-20 shadow-md">
			<div className="flex items-center gap-x-[10px] text-2xl font-semibold text-blue-500">
				<Link href={pageHomeRoute()}>
					<LogoDesktop width={155} height={100} theme={'light'} />
					<LogoPhone width={30} height={10} theme={'light'} />
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
