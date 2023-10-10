import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '@/store/store';
import { useCallback, useEffect } from 'react';

export enum ThemeMode {
	light,
	dark,
}

const dataThemeAttributeKey = 'data-theme';

const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		mode: ThemeMode.light,
	},
	reducers: {
		toggleTheme: (state) => {
			state.mode = (state.mode + 1) % 2;
		},
		initializeTheme: (state) => {
			const storedMode = localStorage.getItem(dataThemeAttributeKey);
			if (storedMode) state.mode = ThemeMode[storedMode as keyof typeof ThemeMode];
		},
	},
});

export default themeSlice;

export function useThemeStore() {
	const themeMode = useSelector<StoreState, ThemeMode>((state) => state.theme.mode);
	const dispatch = useDispatch<StoreDispatch>();

	useEffect(() => {
		dispatch(themeSlice.actions.initializeTheme());
	}, [dispatch]);

	const toggleTheme = () => {
		dispatch(themeSlice.actions.toggleTheme());
	};

	const updateDataThemeAttribute = useCallback(() => {
		document.body.setAttribute(dataThemeAttributeKey, ThemeMode[themeMode]);
	}, [themeMode]);

	const saveToLocalStorage = useCallback(() => {
		localStorage.setItem(dataThemeAttributeKey, ThemeMode[themeMode]);
	}, [themeMode]);

	useEffect(() => {
		updateDataThemeAttribute();
		saveToLocalStorage();
	}, [saveToLocalStorage, updateDataThemeAttribute]);

	return {
		themeMode,
		toggleTheme,
	};
}
