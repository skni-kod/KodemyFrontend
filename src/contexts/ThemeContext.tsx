'use client';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export enum ThemeMode {
	light = 'light',
	dark = 'dark',
}

interface ThemeContextType {
	themeMode: ThemeMode;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;

const dataThemeAttributeKey = 'data-theme';

const updateDataThemeAttribute = (mode: ThemeMode) => {
	document.body.setAttribute(dataThemeAttributeKey, mode);
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.light);

	useEffect(() => {
		try {
			const storedMode = localStorage.getItem(dataThemeAttributeKey) as ThemeMode;
			if (storedMode) {
				setThemeMode(storedMode);
				updateDataThemeAttribute(storedMode);
			}
		} catch (e) {
			localStorage.setItem(dataThemeAttributeKey, themeMode);
		}
	}, [themeMode]);

	const toggleTheme = () => {
		const newMode = themeMode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
		setThemeMode(newMode);
		updateDataThemeAttribute(newMode);
		localStorage.setItem(dataThemeAttributeKey, newMode);
	};

	return <ThemeContext.Provider value={{ themeMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useThemeContext must be used within a ThemeProvider');
	}
	return context;
};
