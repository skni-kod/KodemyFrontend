'use client';
import React from 'react';
import HamburgerMenuIcoBtn from '@/components/layout/navbar/left/HamburgerMenuIcoBtn';
import Link from 'next/link';
import KodemyLogo from '@/components/layout/navbar/left/KodemyLogo';
import SearchBlock from '@/components/layout/navbar/middle/SearchBlock';
import UserActionBlock from '@/components/layout/navbar/right/UserActionBlock';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Header() {
	const rwdSM = useMediaQuery('(min-width:640px)');
	const rwdXS = useMediaQuery('(min-width:530px)');
	return (
		<div className="fixed top-0 z-40 w-full">
			<nav className="flex w-full flex-row justify-between gap-x-2 bg-bg shadow-sm shadow-secondary xs:gap-x-4">
				<div className="flex h-nav flex-row">
					<HamburgerMenuIcoBtn />
					<Link href="/" className="h-nav py-1">
						<KodemyLogo className="h-full w-[unset]" size={`${rwdXS ? 'big' : 'small'}`} />
					</Link>
				</div>
				<div className="flex h-nav items-center">
					<div className="h-navMenu w-fit sm:w-[200px] md:w-[300px]">
						<SearchBlock rwdSM={rwdSM} />
					</div>
				</div>
				<div className="flex h-nav items-center pr-2">
					<div className="flex h-navMenu flex-row items-center gap-2">
						<UserActionBlock />
					</div>
				</div>
			</nav>
		</div>
	);
}
