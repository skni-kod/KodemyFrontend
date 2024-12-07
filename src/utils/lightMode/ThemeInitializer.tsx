'use client';

import React, { useEffect } from 'react';

import { defaultTheme, themes } from '@/utils/lightMode/themes';

export default function ThemeInitializer({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const theme = JSON.parse(localStorage.getItem('theme') || JSON.stringify(defaultTheme));

		const applyInitialTheme = () => {
			const html = document.documentElement;

			html.setAttribute('data-day-theme', theme.dayTheme);
			html.setAttribute('data-night-theme', theme.nightTheme);
			html.setAttribute('data-single-theme', theme.selectedTheme);

			const dayThemeImage = themes.find((t) => t.id === theme.dayTheme)?.imageSrc;
			const nightThemeImage = themes.find((t) => t.id === theme.nightTheme)?.imageSrc;

			if (dayThemeImage) {
				html.style.setProperty('--day-theme-image', `url(${dayThemeImage.src})`);
			}
			if (nightThemeImage) {
				html.style.setProperty('--night-theme-image', `url(${nightThemeImage.src})`);
			}

			if (theme.colorMode === 'system') {
				html.setAttribute('data-color-mode', 'system');
				const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
				html.setAttribute('data-theme', isDarkMode ? theme.nightTheme : theme.dayTheme);
			} else {
				html.setAttribute('data-color-mode', 'single');
				html.setAttribute('data-theme', theme.selectedTheme);
			}
		};

		applyInitialTheme();

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemModeChange = () => {
			const html = document.documentElement;

			if (theme.colorMode === 'system') {
				const isDarkMode = mediaQuery.matches;
				html.setAttribute('data-theme', isDarkMode ? theme.nightTheme : theme.dayTheme);
			}
		};

		mediaQuery.addEventListener('change', handleSystemModeChange);

		return () => {
			mediaQuery.removeEventListener('change', handleSystemModeChange);
		};
	}, []);

	return <>{children}</>;
}
