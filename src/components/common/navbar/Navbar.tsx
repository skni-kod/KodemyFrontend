import React from 'react';
import { TfiMenu } from 'react-icons/tfi';
import Logo from '@/components/common/navbar/atoms/Logo';
import SearchBarDesktop from '@/components/common/navbar/organisms/SearchBarDesktop';
import UserBar from '@/components/common/navbar/organisms/UserBar';
import Link from 'next/link';
import { pageHomeRoute } from '@/pages';

const Navbar = () => {
	const IconClassNames = 'text-grey2white text-2xl h-[25.5px] w-[25.5px]';
	return (
		<nav className="fixed top-0 w-full left-0 bg-white2darkgrey flex items-center justify-between sm:px-7 sm:py-3.5 px-[1vw] py-[1vh] z-20 shadow-md">
			<div className="flex items-center gap-x-[10px] text-2xl font-semibold text-blue-500">
				<Link href={pageHomeRoute()}>
					<Logo width={155} height={100} theme={'light'} />
				</Link>
			</div>
			<SearchBarDesktop />
			<UserBar />
			<TfiMenu className={`${IconClassNames} block md:hidden cursor-pointer`} />
		</nav>
	);
};

export default Navbar;
