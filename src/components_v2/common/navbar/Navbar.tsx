import React from 'react';
import Route from '@/utils/route';
import { TfiClose, TfiMenu } from 'react-icons/tfi';
import LogoDesktop from './atoms/LogoDesktop';
import SearchBarDesktop from '@/components/common/navbar/organisms/SearchBarDesktop';
import UserBar from '@/components/common/navbar/organisms/Desktop/UserBar';
import Link from 'next/link';
import { useSidebarContext } from '@/contexts/SidebarStateContext';

const Navbar = () => {
	const pageHomeRoute = (): Route => {
		return {
			pathname: '/',
		};
	};

	const hamburgerClassName =
		'relative block md:hidden h-6 w-6 mr-2 text-grey2white text-2xl cursor-pointer';
	const { isOpen, setIsOpen } = useSidebarContext();

	return (
		<nav className="fixed top-0 w-full left-0 bg-white2darkgrey flex items-center justify-between px-3 py-1.5 md:py-3 z-20 shadow-md">
			<div className="flex items-center gap-x-[10px] text-2xl font-semibold text-blue-500">
				{!isOpen ? (
					<TfiMenu className={hamburgerClassName} onClick={() => setIsOpen(true)} />
				) : (
					<TfiClose className={hamburgerClassName} onClick={() => setIsOpen(false)} />
				)}
				<Link href={pageHomeRoute()} className="flex items-center">
					<LogoDesktop height={44} />
				</Link>
			</div>
			<SearchBarDesktop />
			<UserBar />
		</nav>
	);
};

export default Navbar;
