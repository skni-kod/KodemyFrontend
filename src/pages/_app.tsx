import './main.css';
import type { AppProps } from 'next/app';
import Favicon from '@/assets/favicon.ico';
import Head from 'next/head';
import Navbar from '@/components/common/navbar/Navbar';
import Sidebar from '@/components/common/sidebar/Sidebar';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import ErrorInterceptorProvider, {
	ErrorInterceptorContext,
} from '@/contexts/ErrorInterceptorContext';
import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { pageHomeRoute } from '@/pages/index';

export const Metadata = {
	title: 'Kodemy',
	description: 'Kodemy to najlepszy zbiór materiałów',
};

const Body = ({ children }: { children: React.ReactNode }) => {
	const { error, dispatchError } = useContext(ErrorInterceptorContext);
	return <>{children}</>;
};

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const homePathName = pageHomeRoute().pathname;

	const isHome = () => router.route === homePathName;

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
						<Sidebar/>
						<Component {...pageProps} />
					</Body>
				</ErrorInterceptorProvider>
			</Provider>
		</>
	);
}
