import React, { useCallback, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useAuthStore } from '@/store/authSlice';
import { jwtDecode } from 'jwt-decode';

export default function Page({ children }: { children: React.ReactNode }) {
	const [cookies] = useCookies<'jwtsession', { jwtsession?: string }>();
	const { user, setAuth } = useAuthStore();

	const updateUser = useCallback(() => {
		if (cookies.jwtsession) {
			setAuth(jwtDecode(cookies.jwtsession));
		}
	}, [cookies.jwtsession, setAuth]);

	useEffect(() => {
		cookies.jwtsession && !user && updateUser();
	}, [cookies.jwtsession, updateUser, user]);

	return <>{children}</>;
}
