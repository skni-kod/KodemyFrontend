import './main.css';
import type { AppProps } from 'next/app';
import Favicon from '@/assets/favicon.ico';
import Head from 'next/head';
import Sidebar from '@/components/common/sidebar/Sidebar';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import ErrorInterceptorProvider, {
	ErrorInterceptorContext,
} from '@/contexts/ErrorInterceptorContext';
import React, { useContext, useEffect, useState } from 'react';
import Navbar from '@/components/common/navbar/Navbar';
import { useAuthStore } from '@/store/authSlice';
import useAuthService from '@/hooks/services/useAuthService';
import SidebarStateProvider from '@/contexts/SidebarStateContext';

export const Metadata = {
	title: 'Kodemy',
	description: 'Kodemy to najlepszy zbiór materiałów',
};

const Body = ({ children }: { children: React.ReactNode }) => {
	const { error, dispatchError } = useContext(ErrorInterceptorContext);
	const { user, setAuth } = useAuthStore();
	const { getMe, checkAuth } = useAuthService();
	const [isAuthed, setIsAuthed] = useState<boolean>(false);

	useEffect(() => {
		(async () => {
			setIsAuthed(await checkAuth());
		})();
	}, [checkAuth]);

	useEffect(() => {
		if (isAuthed && !user) {
			(async () => {
				setAuth(await getMe());
			})();
		}
	}, [getMe, isAuthed, setAuth, user]);

	return <>{children}</>;
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={Favicon.src} />
			</Head>
			<Provider store={store}>
				<ErrorInterceptorProvider>
					<Body>
						<SidebarStateProvider>
							<Navbar />
							<Sidebar />
						</SidebarStateProvider>
						<Component {...pageProps} />
					</Body>
				</ErrorInterceptorProvider>
			</Provider>
		</>
	);
}
