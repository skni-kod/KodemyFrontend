import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/store/authSlice';

export const store = configureStore({
	reducer: {
		[authSlice.name]: authSlice.reducer,
	},
});
