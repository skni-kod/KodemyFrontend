import './main.scss';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import FaviconImage from '@/assets/favicon.ico';
import SidebarStateProvider, { useSidebarContext } from '@/contexts/SidebarStateContext';
import Sidebar from '@/components/layout/Sidebar';
import clsx from 'clsx';
import { CookiesProvider } from 'react-cookie';
import FiltersProvider, { useFiltersContext } from '@/contexts/FiltersContext';

export const Metadata = {
	title: 'Kodemy',
	description: 'Kodemy to najlepszy zbiór materiałów',
};

function Content({ children }: { children: React.ReactNode }) {
	const { isOpen } = useSidebarContext();
	const { clearFilters } = useFiltersContext();

	useEffect(() => clearFilters(), [clearFilters]);

	return (
		<>
			<div className="grid grid-cols-1 grid-rows-[3.75rem_1fr] gap-2 w-full h-screen max-h-screen">
				<Navbar className="h-[3.75rem] w-full relative" />
				<main className="row-start-2 w-full h-full">
					{
						<Sidebar
							className={`fixed top-0 h-full pt-[4rem] bg-bg text-text2bg shadow-md ${
								isOpen ? 'w-64' : 'w-[3.75rem]'
							}`}
						/>
					}
					<div className={`w-full min-h-full ${isOpen ? 'pl-64' : 'pl-[3.75rem]'}`}>
						<div className="w-full max-w-lg p-4 m-auto">{children}</div>
					</div>
				</main>
			</div>
			<div id="m-root" />
		</>
	);
}

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={FaviconImage.src} />
			</Head>
			<Provider store={store}>
				<CookiesProvider>
					<SidebarStateProvider>
						<FiltersProvider>
							<Content>
								<Component {...pageProps} />
							</Content>
						</FiltersProvider>
					</SidebarStateProvider>
				</CookiesProvider>
			</Provider>
		</>
	);
}
