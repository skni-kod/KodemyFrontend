import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '@/store/store';
import { useCallback } from 'react';

export type AuthState = {
	user: User | null;
};

export type Jwt = {
	id: number;
	username: string;
	authorities: string[];
	iat: number;
	exp: number;
};

export type User = {
	id: number;
	username: string;
};

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
	},
	reducers: {
		setAuth(state, action) {
			state.user = action.payload;
		},
		dispatchAuth(state) {
			state.user = null;
		},
	},
});

export default authSlice;

export const useAuthStore = () => {
	const { user } = useSelector<StoreState, AuthState>((state) => state.auth);
	const dispatch = useDispatch<StoreDispatch>();

	const setAuth = useCallback(
		(jwt: Jwt) => {
			dispatch(authSlice.actions.setAuth(mapUser(jwt)));
		},
		[dispatch],
	);

	const mapUser = (jwt: Jwt): User => {
		return {
			id: jwt.id,
			username: jwt.username,
		};
	};

	const unset = useCallback(() => {
		dispatch(authSlice.actions.dispatchAuth());
	}, [dispatch]);

	return {
		user,
		setAuth,
		unset,
	};
};
