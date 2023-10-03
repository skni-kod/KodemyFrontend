import { createSlice } from '@reduxjs/toolkit';

type AuthUserRole = {
	id: number;
	name: string;
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
	isLogged: boolean;
	user?: AuthUser;
};

const initialState: AuthState = {
	isLogged: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login(state, action) {
			state = {
				isLogged: true,
				...action.payload,
			};
		},
		logout(state, action) {
			state = {
				isLogged: false,
				user: undefined,
				...action.payload,
			};
		},
	},
});

export default authSlice;

export const { login, logout } = authSlice.actions;