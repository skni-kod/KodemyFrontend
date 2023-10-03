import React from 'react';
import { TfiMenu } from 'react-icons/tfi';
import { BiSearch } from 'react-icons/bi';
import Logo from '@/components/common/navbar/atoms/Logo';
import SearchBarDesktop from '@/components/common/navbar/organisms/SearchBarDesktop';
import UserBar from '@/components/common/navbar/organisms/UserBar';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
	const isMobile = useMediaQuery({ maxWidth: 768 }); // Dla ekranów o szerokości do 768px (możesz dostosować tę wartość)

	const IconClassNames = 'text-gray-400 text-2xl h-[25.5px] w-[25.5px]';

	return (
		<nav className="relative top-0 w-full left-0 bg-white flex items-center justify-between px-7 py-3.5 z-10 shadow-md">
			<div className="flex items-center gap-x-[10px] text-2xl font-semibold text-blue-500">
				<TfiMenu className="hidden" />
				<Logo width={155} height={100} />
			</div>

			{/* BiSearch będzie widoczny tylko na telefonach */}
			{isMobile && <BiSearch className={`${IconClassNames} mx-3`} />}

			{/* SearchBarDesktop będzie widoczny tylko na komputerach */}
			{!isMobile && <SearchBarDesktop />}

			<UserBar />
		</nav>
	);
};

export default Navbar;
