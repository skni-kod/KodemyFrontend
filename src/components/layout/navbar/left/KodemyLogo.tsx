'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import KodemyDarkBig from '@/assets/logo/dark/kodemyBig.png';
import KodemyDarkSmall from '@/assets/logo/dark/kodemySmall.png';
import KodemyWhiteBig from '@/assets/logo/white/kodemyBig.png';
import KodemyWhiteSmall from '@/assets/logo/white/kodemySmall.png';
import { IconType, themes } from '@/utils/lightMode/themes';

type KodemyLogoProps = {
	className?: string;
	ratio?: number;
	size: 'big' | 'small';
};

export default function KodemyLogo({ className = 'h-full w-full', ratio = 1, size }: KodemyLogoProps) {
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

	const logo =
		size === 'big'
			? themeType === 'dark'
				? KodemyDarkBig
				: KodemyWhiteBig
			: themeType === 'dark'
				? KodemyDarkSmall
				: KodemyWhiteSmall;

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
