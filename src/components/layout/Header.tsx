import React from 'react';
import HamburgerMenuIcoBtn from '@/components/layout/navbar/left/HamburgerMenuIcoBtn';
import Link from 'next/link';
import KodemyLogo from '@/components/layout/navbar/left/KodemyLogo';
import { useSidebar } from '@/contexts/SidebarContext';
import UserActionBtns from '@/components/layout/navbar/right/UserActionBtns';
import SearchBlock from '@/components/layout/navbar/middle/SearchBlock';
import UserActionBlock from '@/components/layout/navbar/right/UserActionBlock';

export default function Header() {
	return (
		<div className="fixed top-0 z-40 w-full">
			<nav className="flex w-full flex-row justify-between bg-bg shadow-md">
				<div className="flex h-nav flex-row">
					<HamburgerMenuIcoBtn />
					<Link href="/" className="h-nav py-1">
						<KodemyLogo className="h-full w-[unset]" />
					</Link>
				</div>
				<div className="flex h-nav items-center">
					<div className="h-navMenu w-[300px]">
						<SearchBlock />
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
