/* eslint-disable prettier/prettier */
'use client';
import React from 'react';
import HamburgerMenuIcoBtn from '@/components/layout/navbar/left/HamburgerMenuIcoBtn';
import Link from 'next/link';
import KodemyLogo from '@/components/layout/navbar/left/KodemyLogo';
import { useSidebar } from '@/contexts/SidebarContext';
import UserActionBtns from '@/components/layout/navbar/right/UserActionBtns';
import SearchBlock from '@/components/layout/navbar/middle/SearchBlock';
import UserActionBlock from '@/components/layout/navbar/right/UserActionBlock';
import { useToast } from '@/contexts/ToastContext';

export default function Header() {
	const { addToast } = useToast();

	const handleShowToast = () => {
		addToast('Testowe powiadomienie', 'info', 5000);
	};

	const handleShowToast2 = () => {
		addToast('Testowy błąd', 'danger', 5000);
	};

	const handleShowToast3 = () => {
		addToast('Testowy sukces', 'success', 5000);
	};

	const handleShowToast4 = () => {
		addToast('Testowe ostrzeżenie', 'warning', 5000);
	};

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
					<button className="h-navMenu w-[100px]" onClick={handleShowToast}>
						TestToast1
					</button>
					<button className="h-navMenu w-[100px]" onClick={handleShowToast2}>
						TestToast2
					</button>
					<button className="h-navMenu w-[100px]" onClick={handleShowToast3}>
						TestToast3
					</button>
					<button className="h-navMenu w-[100px]" onClick={handleShowToast4}>
						TestToast4
					</button>
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
