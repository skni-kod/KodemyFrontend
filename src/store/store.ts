import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/store/authSlice';
import sectionsSlice from '@/store/sectionsSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		sections: sectionsSlice.reducer,
	},
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;