import './main.css';
import type { AppProps } from 'next/app';
import Favicon from '@/assets/favicon.ico';
import Head from 'next/head';
import Sidebar from '@/components/common/sidebar/Sidebar';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import ErrorInterceptorProvider, { ErrorInterceptorContext } from '@/contexts/ErrorInterceptorContext';
import React, { useContext, useEffect } from 'react';
import Navbar from '@/components/common/navbar/Navbar';
import { useAuthStore } from '@/store/authSlice';
import useAuthService from '@/hooks/services/useAuthService';

export const Metadata = {
	title: 'Kodemy',
	description: 'Kodemy to najlepszy zbiór materiałów',
};

const Body = ({ children }: { children: React.ReactNode }) => {
	const { error, dispatchError } = useContext(ErrorInterceptorContext);
	const { isAuth, setAuth } = useAuthStore();
	const { getMe } = useAuthService();

	useEffect(() => {
		(async () => {
			setAuth(await getMe());
		})();
	}, [isAuth, getMe, setAuth]);

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
						<Navbar />
						<Sidebar />
						<Component {...pageProps} />
					</Body>
				</ErrorInterceptorProvider>
			</Provider>
		</>
	);
}
