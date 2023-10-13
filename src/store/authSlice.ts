import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '@/store/store';
import { useCallback, useEffect, useState } from 'react';

export enum AuthUserRoleType {
	ROLE_USER,
	ROLE_MODERATOR,
	ROLE_ADMIN,
	ROLE_SUPERADMIN,
}

type AuthUserRole = {
	id: number;
	name: AuthUserRoleType;
};

type AuthUser = {
	id: 1;
	username: string;
	email: string | undefined;
	photo: string;
	createdDate: string;
	role: AuthUserRole;
};

export type AuthState = {
	authUser?: AuthUser;
};

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		authUser: undefined,
	},
	reducers: {
		setAuth(state, action) {
			state.authUser = action.payload;
		},
		dispatchAuth(state) {
			state.authUser = undefined;
		},
	},
});

export default authSlice;

export const useAuthStore = () => {
	const { authUser } = useSelector<StoreState, AuthState>((state) => state.auth);
	const dispatch = useDispatch<StoreDispatch>();
	const [isAuth, setIsAuth] = useState<boolean>(false);

	useEffect(() => {
		setIsAuth(authUser !== undefined);
	}, [authUser]);

	const setAuth = useCallback(
		(user: AuthUser) => {
			dispatch(authSlice.actions.setAuth(user));
		},
		[dispatch],
	);

	const logout = useCallback(() => {
		dispatch(authSlice.actions.dispatchAuth());
	}, [dispatch]);

	return {
		isAuth,
		setAuth,
		user: authUser,
		logout,
	};
};
