'use client';
import React from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthService from '@/services/auth/authService';
import { deleteCookie, getCookie } from 'cookies-next';
import { PRE_SESSION } from '@/app/api/callback/route';

const __SESSION_CACHE: {
	signUri: string;
	session: Session | null;
} = {
	signUri: '/',
	session: null,
};

export interface Session {
	user: {
		id: number;
		username: string;
		state: number;
		roles: string[];
	};
	token: {
		bearer: string;
		refresh: string;
	};
}

export interface Jwt {
	jti: string;
	id: number;
	authorities: string[];
	state: number;
	iss: string;
	sub: string;
	iat: number;
	exp: number;
}

export enum SessionStatus {
	LOADING,
	AUTHENTICATED,
	UNAUTHENTICATED,
}

export type SessionContextType =
	| {
			session: Session;
			status: SessionStatus.AUTHENTICATED;
			update: (session: Session | undefined) => void;
	  }
	| {
			session: undefined;
			status: SessionStatus.UNAUTHENTICATED | SessionStatus.LOADING;
			update: (session: Session | undefined) => void;
	  };

export const SessionContext = React.createContext<SessionContextType>({
	session: undefined,
	status: SessionStatus.LOADING,
	update: () => {},
});

interface SessionContextProviderProps {
	session?: Session;
	signUri: string;
	children: React.ReactNode;
}

const SESSION_ITEM_NAME = 'session';

const SessionProvider = ({ session: sessionProp = undefined, signUri, children }: SessionContextProviderProps) => {
	__SESSION_CACHE.signUri = signUri;

	const checkOrUpdateTokens = React.useCallback(async ({ bearer, refresh }: { bearer: string; refresh: string }) => {
		const jwtJson = jwtDecode<Jwt>(bearer);
		if (new Date(jwtJson.exp * 1000) < new Date()) {
			const newTokens = await AuthService.refreshJwt(refresh, jwtJson.jti);
			if (newTokens) return { bearer: newTokens.token, refresh: newTokens.refresh };
		}
		return { bearer, refresh };
	}, []);

	const updateSession = React.useCallback(async (bearer: string, refresh: string) => {
		const jwt = jwtDecode<Jwt>(bearer);
		return {
			user: { id: jwt.id, username: jwt.sub, roles: jwt.authorities, state: jwt.state },
			token: { bearer, refresh },
		};
	}, []);

	const [session, setSession] = React.useState<Session | undefined>(sessionProp);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const update = React.useCallback((newSession: Session | undefined) => {
		if (!newSession) {
			localStorage.removeItem(SESSION_ITEM_NAME);
			return;
		}
		setSession(newSession);
		localStorage.setItem(SESSION_ITEM_NAME, btoa(JSON.stringify(newSession)));
	}, []);

	React.useEffect(() => {
		const loadFromLocalStorage = async () => {
			const sessionStorageValue = localStorage.getItem(SESSION_ITEM_NAME);
			if (sessionStorageValue) {
				const sessionStorageValueJson = JSON.parse(atob(sessionStorageValue));
				if (sessionStorageValueJson) {
					return await checkOrUpdateTokens(sessionStorageValueJson.token).then((tokens) =>
						updateSession(tokens.bearer, tokens.refresh),
					);
				}
			}
			return undefined;
		};

		const loadFromAuthState = async () => {
			const authStateCookieValue = getCookie(PRE_SESSION, {});
			if (authStateCookieValue) {
				const authStateJson = JSON.parse(atob(authStateCookieValue));
				if (authStateJson) {
					deleteCookie(PRE_SESSION, {});
					return await checkOrUpdateTokens(authStateJson).then((tokens) =>
						updateSession(tokens.bearer, tokens.refresh),
					);
				}
			}
			return undefined;
		};

		loadFromLocalStorage()
			.then((localStorageSession) => {
				if (localStorageSession) {
					update(localStorageSession);
					return localStorageSession;
				}
				return loadFromAuthState();
			})
			.then((authSession) => {
				if (authSession) {
					update(authSession);
					return authSession;
				}
				return undefined;
			})
			.then((initializedSession) => {
				if (initializedSession) {
					setSession(initializedSession);
					localStorage.setItem(SESSION_ITEM_NAME, btoa(JSON.stringify(initializedSession)));
				} else {
					localStorage.removeItem(SESSION_ITEM_NAME);
				}
				setIsLoading(false);
			});
	}, [checkOrUpdateTokens, update, updateSession]);

	const status = React.useCallback(() => {
		if (isLoading) return SessionStatus.LOADING;
		return session ? SessionStatus.AUTHENTICATED : SessionStatus.UNAUTHENTICATED;
	}, [isLoading, session]);

	const value: any = React.useMemo(
		() => ({
			session,
			status: status(),
			update,
		}),
		[session, status, update],
	);

	return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export default SessionProvider;

export const useSessionContext = (isSecure = false): SessionContextType => {
	const context = React.useContext(SessionContext);
	if (!context) {
		throw new Error('useSessionContext must be used within a SessionProvider');
	}
	const isUnauthenticated = context.status == SessionStatus.UNAUTHENTICATED;

	React.useEffect(() => {
		if (isSecure && isUnauthenticated) {
			window.location.href = `${__SESSION_CACHE.signUri}?${new URLSearchParams({
				callbackUri: window.location.href,
			})}`;
		}
	}, [isSecure, isUnauthenticated, context.status]);

	return isSecure && isUnauthenticated
		? { session: context.session, status: SessionStatus.LOADING, update: context.update }
		: context;
};
