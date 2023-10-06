import React from 'react';
import { TfiMenu } from 'react-icons/tfi';
import Logo from '@/components/common/navbar/atoms/Logo';
import SearchBarDesktop from '@/components/common/navbar/organisms/SearchBarDesktop';
import UserBar from '@/components/common/navbar/organisms/UserBar';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { pageIndexRoute } from '@/pages';

const Navbar = () => {
	return (
		<nav className="fixed top-0 w-full left-0 bg-white2darkgrey flex items-center justify-between px-7 py-3.5 z-20 shadow-md">
			<div className="flex items-center gap-x-[10px] text-2xl font-semibold text-blue-500">
				<TfiMenu className="hidden" />
				<Link href={pageIndexRoute()}>
					<Logo width={155} height={100} theme={'light'} />
				</Link>
			</div>
			<SearchBarDesktop />
			<UserBar />
		</nav>
	);
};

export default Navbar;
