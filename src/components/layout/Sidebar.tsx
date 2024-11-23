'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import codingLanguage from '@/assets/section/dark/coding-language.png';
import codingLanguageWhite from '@/assets/section/white/coding-language.png';
import consoleI from '@/assets/section/dark/console.png';
import consoleIWhite from '@/assets/section/white/console.png';
import internet from '@/assets/section/dark/internet.png';
import internetWhite from '@/assets/section/white/internet.png';
import moreInfo from '@/assets/section/dark/more-information.png';
import moreInfoWhite from '@/assets/section/white/more-information.png';
import retroGame from '@/assets/section/dark/retro-game.png';
import retroGameWhite from '@/assets/section/white/retro-game.png';
import { useSidebar } from '@/contexts/SidebarContext';

type SidebarSection = {
	id: number;
	name: string;
	icon: { light: string; dark: string };
};

export const sidebarSections: SidebarSection[] = [
	{
		id: 1,
		name: 'Aplikacje webowe',
		icon: {
			light: internet.src,
			dark: internetWhite.src,
		},
	},
	{
		id: 2,
		name: 'GameDev',
		icon: {
			light: consoleI.src,
			dark: consoleIWhite.src,
		},
	},
	{
		id: 3,
		name: 'Elektronika/Retro',
		icon: {
			light: retroGame.src,
			dark: retroGameWhite.src,
		},
	},
	{
		id: 4,
		name: 'Programowanie',
		icon: {
			light: codingLanguage.src,
			dark: codingLanguageWhite.src,
		},
	},
	{
		id: 5,
		name: 'Inne',
		icon: {
			light: moreInfo.src,
			dark: moreInfoWhite.src,
		},
	},
];

export default function Sidebar() {
	const sidebar = useSidebar();
	const [theme, setTheme] = useState<'light' | 'dark'>('light');

	useEffect(() => {
		const html = document.documentElement;

		const updateTheme = () => {
			const currentTheme = html.getAttribute('data-theme')?.includes('dark') ? 'dark' : 'light';
			setTheme(currentTheme);
		};

		const observer = new MutationObserver(updateTheme);
		observer.observe(html, { attributes: true, attributeFilter: ['data-theme'] });

		updateTheme();

		return () => observer.disconnect();
	}, []);

	return (
		<div className={`fixed min-h-full ${!sidebar.isOpen ? 'w-side' : 'w-expandSide'} bg-bg shadow-md shadow-secondary`}>
			<ul className="flex h-full w-full list-none flex-col pt-2">
				{sidebarSections.map(({ id, name, icon }) => (
					<Link
						key={id}
						href={`/sections/${id}`}
						className="flex w-full cursor-pointer flex-row items-center bg-bg hover:bg-bgHover"
					>
						<div className="p-5">
							<Image src={theme === 'light' ? icon.light : icon.dark} width={24} height={24} alt={name} />
						</div>
						<span
							className={`text-secondary transition-all duration-300 ease-in-out ${
								!sidebar.isOpen ? 'hidden w-0' : ''
							}`}
						>
							{name}
						</span>
					</Link>
				))}
			</ul>
		</div>
	);
}
