'use client';
import React from 'react';
import { jwtDecode } from 'jwt-decode';
import AuthService from '@/services/auth/authService';
import { deleteCookie, getCookie } from 'cookies-next';
import { AUTH_PRE_SESSION } from '@/utils/constant';
import UserService from '@/services/user/userService';
import UserAuthorized from '@/services/user/types/userAuthorized';

const __SESSION_CACHE: {
	signUri: string;
	session: Session | null;
} = {
	signUri: '/',
	session: null
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

export type SessionContextType =
	| {
	session: Session;
	sessionStatus: 'AUTHENTICATED';
	update: (session: Session | undefined) => void;
} | {
	session: undefined;
	sessionStatus: 'UNAUTHENTICATED';
	update: (session: Session | undefined) => void;
}
	| {
	session: Session | undefined;
	sessionStatus: 'LOADING';
	update: (session: Session | undefined) => void;
}

export const SessionContext = React.createContext<SessionContextType>({
	session: undefined,
	sessionStatus: 'LOADING',
	update: () => {
	}
});

interface SessionContextProviderProps {
	session?: Session;
	signUri: string;
	children: React.ReactNode;
}

const SessionProvider = ({ session: sessionProp = undefined, signUri, children }: SessionContextProviderProps) => {
	__SESSION_CACHE.signUri = signUri;

	const [session, setSession] = React.useState<Session | undefined>(sessionProp);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const update = React.useCallback((user: UserAuthorized | undefined) => {
		if (!user) {
			setSession(undefined);
			return undefined;
		}
		const session: Session = {
			user: { id: user.id, username: user.username, roles: [user.role.name], state: 0 },
			token: { bearer: '', refresh: '' }
		};
		setSession(session);
		return session;
	}, []);

	React.useEffect(() => {
		UserService.getMe()
			.then((user) => update(user))
			.catch(() => update(undefined))
			.finally(() => {
				setIsLoading(false);
			});
	}, [update]);

	const status = React.useCallback(() => {
		return isLoading ? 'LOADING' : (session ? 'AUTHENTICATED' : 'UNAUTHENTICATED');
	}, [isLoading, session]);

	const value: any = React.useMemo(
		() => ({
			session,
			status: status(),
			update
		}),
		[session, status, update]
	);

	return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export default SessionProvider;

export const useSessionContext = (isSecure = false): SessionContextType => {
	const context = React.useContext(SessionContext);
	if (!context) {
		throw new Error('useSessionContext must be used within a SessionProvider');
	}

	const isUnauthenticated = context.sessionStatus == 'UNAUTHENTICATED';

	React.useEffect(() => {
		if (isSecure && isUnauthenticated) {
			window.location.href = `${__SESSION_CACHE.signUri}?${new URLSearchParams({
				callbackUri: window.location.href
			})}`;
		}
	}, [isSecure, isUnauthenticated, context.sessionStatus]);

	/*return isSecure && isUnauthenticated
		? { session: context.session, sessionStatus: 'LOADING', update: context.update }
		: context;*/
	return context;
};