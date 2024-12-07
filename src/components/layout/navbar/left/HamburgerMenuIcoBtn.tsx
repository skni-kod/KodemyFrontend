'use client';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import { useSidebar } from '@/contexts/SidebarContext';

export default function HamburgerMenuIcoBtn() {
	const sidebar = useSidebar();

	return (
		<div className="cursor-pointer" onClick={sidebar.handleToggle}>
			<button className="flex aspect-square h-nav w-side items-center justify-center">
				<GiHamburgerMenu className="block h-full w-full p-1/4 text-secondary" />
			</button>
		</div>
	);
}
