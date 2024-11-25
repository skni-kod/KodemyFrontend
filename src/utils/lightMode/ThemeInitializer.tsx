'use client';

import React, { useEffect } from 'react';

export default function ThemeInitializer({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const colorMode = localStorage.getItem('colorMode') || 'single';
		const dayTheme = localStorage.getItem('dayTheme') || 'light-default';
		const nightTheme = localStorage.getItem('nightTheme') || 'dark-default';
		const singleTheme = localStorage.getItem('selectedTheme') || 'dark-default';

		const applyInitialTheme = () => {
			const html = document.documentElement;

			// Zachowaj dane o motywach w HTML
			html.setAttribute('data-day-theme', dayTheme);
			html.setAttribute('data-night-theme', nightTheme);
			html.setAttribute('data-single-theme', singleTheme);

			if (colorMode === 'system') {
				html.setAttribute('data-color-mode', 'system');
				const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
				html.setAttribute('data-theme', isDarkMode ? nightTheme : dayTheme);
			} else {
				html.setAttribute('data-color-mode', 'single');
				html.setAttribute('data-theme', singleTheme);
			}
		};

		applyInitialTheme();

		// Dodanie listenera dla trybu systemowego
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const handleSystemModeChange = () => {
			const html = document.documentElement;

			// Tylko jeśli tryb to "system", aktualizujemy `data-theme`
			if (html.getAttribute('data-color-mode') === 'system') {
				const isDarkMode = mediaQuery.matches;
				const dayTheme = html.getAttribute('data-day-theme')!;
				const nightTheme = html.getAttribute('data-night-theme')!;
				html.setAttribute('data-theme', isDarkMode ? nightTheme : dayTheme);
			}
		};

		mediaQuery.addEventListener('change', handleSystemModeChange);

		return () => {
			mediaQuery.removeEventListener('change', handleSystemModeChange);
		};
	}, []);

	return <>{children}</>;
}
