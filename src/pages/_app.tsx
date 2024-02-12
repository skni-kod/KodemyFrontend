import './main.scss';
import type { AppProps } from 'next/app';
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import FaviconImage from '@/assets/favicon.ico';
import SidebarStateProvider, { useSidebarContext } from '@/contexts/SidebarStateContext';
import Sidebar from '@/components/layout/Sidebar';
import clsx from 'clsx';

export const Metadata = {
	title: 'Kodemy',
	description: 'Kodemy to najlepszy zbiór materiałów',
};



export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={FaviconImage.src} />
			</Head>
			<Provider store={store}>
				<SidebarStateProvider>
					<div className="flex flex-col w-full h-screen max-h-screen">
						<Component {...pageProps} />
					</div>
				</SidebarStateProvider>
			</Provider>
		</>
	);
}
