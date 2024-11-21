'use client';

import React, { useEffect } from 'react';

export default function ThemeInitializer({ children }: { children: React.ReactNode }) {
	useEffect(() => {
		const savedTheme = localStorage.getItem('selectedTheme') || 'dark-default';
		const colorMode = localStorage.getItem('colorMode') || 'single';
		const dayTheme = localStorage.getItem('dayTheme') || 'light-default';
		const nightTheme = localStorage.getItem('nightTheme') || 'dark-default';

		const applyTheme = () => {
			let themeId = savedTheme;
			if (colorMode === 'system') {
				const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
				themeId = isDarkMode ? nightTheme : dayTheme;
			}
			document.documentElement.setAttribute('data-theme', themeId);
		};

		applyTheme();

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', applyTheme);

		return () => {
			mediaQuery.removeEventListener('change', applyTheme);
		};
	}, []);

	return <>{children}</>;
}
