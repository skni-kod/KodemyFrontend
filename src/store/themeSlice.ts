import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '@/store/store';
import { useCallback, useEffect } from 'react';

export enum ThemeMode {
	light,
	dark,
}

const dataThemeAttribute = 'data-theme';

const initialState: { mode: ThemeMode } = {
	mode: ThemeMode.light,
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		toggleTheme: (state) => {
			state.mode = state.mode === ThemeMode.light ? ThemeMode.dark : ThemeMode.light;
		},
	},
});

export default themeSlice;

export const useThemeStore = () => {
	const themeMode = useSelector<StoreState, ThemeMode>((state) => state.theme.mode);
	const dispatch = useDispatch<StoreDispatch>();

	const isThemeStored = () => localStorage.getItem(dataThemeAttribute) !== null;

	const updateBodyAttribute = useCallback(() => {
		document.body.setAttribute(dataThemeAttribute, ThemeMode[themeMode]);
	}, [themeMode]);

	const toggleTheme = () => {
		dispatch(themeSlice.actions.toggleTheme());
	};

	const saveToLocalStorage = useCallback(() => {
		localStorage.setItem(dataThemeAttribute, `${ThemeMode[themeMode]}`);
	}, [themeMode]);

	const initTheme = useCallback(() => {
		if (!isThemeStored()) {
			saveToLocalStorage();
			updateBodyAttribute();
		} else {
			if (localStorage.getItem(dataThemeAttribute) === ThemeMode[ThemeMode.dark]) {
				dispatch(themeSlice.actions.toggleTheme());
			}
		}
	}, [dispatch, saveToLocalStorage, updateBodyAttribute]);

	useEffect(() => initTheme(), [initTheme]);

	useEffect(() => {
		saveToLocalStorage();
		updateBodyAttribute();
	}, [themeMode, saveToLocalStorage, updateBodyAttribute]);

	return { themeMode, toggleTheme };
};
