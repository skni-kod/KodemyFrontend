import './main.css';
import type { AppProps } from 'next/app';
import Favicon from '@/assets/favicon.ico';
import Head from 'next/head';
import Navbar from '@/components/common/navbar/Navbar';
import Sidebar from '@/components/common/sidebar/Sidebar';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { ErrorInterceptorProvider } from '@/contexts/ErrorInterceptorContext';
import React from 'react';

export const Metadata = {
	title: 'Kodemy',
	description: 'Kodemy to najlepszy zbiór materiałów',
};

const Body = ({ children }: { children: React.ReactNode }) => {
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
