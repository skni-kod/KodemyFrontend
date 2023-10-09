import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/store/authSlice';
import sectionsSlice from '@/store/sectionsSlice';
import themeSlice from '@/store/themeSlice';

export const store = configureStore({
	reducer: {
		theme: themeSlice.reducer,
		auth: authSlice.reducer,
		sections: sectionsSlice.reducer,
	},
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
