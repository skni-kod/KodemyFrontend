import React from 'react';
import { TfiMenu } from 'react-icons/tfi';
import Logo from '@/components/common/navbar/atoms/Logo';
import SearchBarDesktop from '@/components/common/navbar/organisms/SearchBarDesktop';
import UserBar from '@/components/common/navbar/organisms/UserBar';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
	const IconClassNames = 'text-gray-400 text-2xl h-[25.5px] w-[25.5px]';

	return (
		<nav className="relative top-0 w-full left-0 bg-white2darkgrey flex items-center justify-between px-7 py-3.5 z-20 shadow-md">
			<div className="flex items-center gap-x-[10px] text-2xl font-semibold text-blue-500">
				<TfiMenu className="hidden" />
				<Logo width={155} height={100} theme={'light'} />
			</div>

			<SearchBarDesktop />

			<UserBar />
		</nav>
	);
};

export default Navbar;
