'use client';
import React from 'react';
import UserAuthorized from '@/services/user/types/userAuthorized';
import UserService from '@/services/user/userService';

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
		state: number
		role: string;
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
	isSessionLoading: false
	refresh: () => void;
}
	| {
	session: Session | undefined;
	isSessionLoading: true;
	refresh: () => void;
}
	| {
	session: undefined;
	isSessionLoading: false;
	refresh: () => void;
};

export const SessionContext = React.createContext<SessionContextType>({
	session: undefined,
	isSessionLoading: false,
	refresh: () => {
	}
});

interface SessionContextProviderProps {
	session?: Session;
	signUri: string;
	children: React.ReactNode;
}

const SessionProvider = ({ session: sessionProp = undefined, signUri, children }: SessionContextProviderProps) => {
	__SESSION_CACHE.signUri = signUri;

	const updateSession = React.useCallback(async (user: UserAuthorized) => {
		setSession({
			user: { id: user.id, username: user.username, role: user.role.name, state: 0 }
		});
	}, []);

	const [session, setSession] = React.useState<Session | undefined>(sessionProp);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);

	const update = React.useCallback(() => {
		const updateFromApi = async () => {
			return await UserService.getMe().then((user) => updateSession(user));
		};

		updateFromApi().finally(() => {
			setIsLoading(false);
		});
	}, [session]);

	React.useEffect(() => {
		const updateFromApi = async () => {
			return await UserService.getMe().then((user) => updateSession(user));
		};

		updateFromApi().finally(() => {
			setIsLoading(false);
		});
	}, []);

	const isLoading1 = React.useCallback(() => isLoading, [isLoading]);

	const value: any = React.useMemo(
		() => ({
			session,
			isSessionLoading: isLoading1(),
			refresh: update
		}),
		[session, update]
	);

	return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};

export default SessionProvider;

export const useSessionContext = (isSecure = false): SessionContextType => {
	const context = React.useContext(SessionContext);
	if (!context) {
		throw new Error('useSessionContext must be used within a SessionProvider');
	}

	React.useEffect(() => context.refresh(), []);

	React.useEffect(() => {
		if (isSecure && (context.session == undefined && context.isSessionLoading)) {
			window.location.href = `${__SESSION_CACHE.signUri}?${new URLSearchParams({
				callbackUri: window.location.href
			})}`;
		}
	}, [isSecure, context.session, context.isSessionLoading]);

	return context;
};
