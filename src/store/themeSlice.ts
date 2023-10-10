import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '@/store/store';
import { useEffect } from 'react';

export enum ThemeMode {
	light,
	dark,
}

const dataThemeAttributeKey = 'data-theme';

const updateDataThemeAttribute = (mode: ThemeMode) => {
	document.body.setAttribute(dataThemeAttributeKey, ThemeMode[mode]);
};

const saveToLocalStorage = (mode: ThemeMode) => {
	localStorage.setItem(dataThemeAttributeKey, ThemeMode[mode]);
};

const themeSlice = createSlice({
	name: 'theme',
	initialState: {
		mode: ThemeMode.light,
	},
	reducers: {
		toggleTheme: (state) => {
			state.mode = (state.mode + 1) % 2;
			updateDataThemeAttribute(state.mode);
			saveToLocalStorage(state.mode);
		},
		initializeTheme: (state) => {
			const storedMode = localStorage.getItem(dataThemeAttributeKey);
			if (storedMode) state.mode = ThemeMode[storedMode as keyof typeof ThemeMode];
			updateDataThemeAttribute(state.mode);
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

	return {
		themeMode,
		toggleTheme,
	};
}
