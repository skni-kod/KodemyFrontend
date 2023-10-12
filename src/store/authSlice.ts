import { createSlice } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { StoreDispatch, StoreState } from '@/store/store';
import { useCallback } from 'react';

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

	const isAuth = (): boolean => authUser !== undefined;

	const setAuth = useCallback(
		(user: AuthUser) => {
			dispatch(authSlice.actions.setAuth(user));
		},
		[dispatch],
	);

	const logout = useCallback(() => {
		dispatch(authSlice.actions.dispatchAuth());
	}, [dispatch]);

	const isUserHasPermission = useCallback(
		(isUser: boolean, isModerator: boolean, isAdmin: boolean) => {
			console.log('dsasd');
			if (!isAuth() || !authUser) return false;
			const roleName = authUser.role.name;
			if (roleName === AuthUserRoleType.ROLE_USER) return isUser;
			if (roleName === AuthUserRoleType.ROLE_MODERATOR) return isModerator;
			if (roleName === AuthUserRoleType.ROLE_ADMIN) return isAdmin;
			return roleName === AuthUserRoleType.ROLE_SUPERADMIN;
		},
		[authUser, isAuth],
	);

	return {
		isAuth,
		isUserHasPermission,
		setAuth,
		user: authUser,
		logout,
	};
};
