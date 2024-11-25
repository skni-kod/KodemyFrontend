'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import KodemyDark from '@/assets/logo/dark/kodemyBig.png';
import KodemyWhite from '@/assets/logo/white/kodemyBig.png';
import { IconType, themes } from '@/utils/lightMode/themes';

type KodemyLogoProps = {
	className?: string;
	ratio?: number;
};

export default function KodemyLogo({ className = 'h-full w-full', ratio = 1 }: KodemyLogoProps) {
	const [themeType, setThemeType] = useState<IconType>('dark');

	useEffect(() => {
		const html = document.documentElement;

		const updateThemeType = () => {
			const currentThemeId = html.getAttribute('data-theme') || 'dark-default';
			const currentTheme = themes.find((theme) => theme.id === currentThemeId);
			setThemeType(currentTheme?.iconType || 'dark');
		};

		const observer = new MutationObserver(updateThemeType);
		observer.observe(html, { attributes: true, attributeFilter: ['data-theme'] });

		updateThemeType();

		return () => observer.disconnect();
	}, []);

	const logo = themeType === 'dark' ? KodemyDark : KodemyWhite;

	return (
		<div className={className}>
			<Image
				src={logo.src}
				width={logo.width * ratio}
				height={logo.height * ratio}
				alt="Logo strony"
				style={{
					height: '100%',
					width: 'auto',
				}}
				priority
			/>
		</div>
	);
}
