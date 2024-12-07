import React from 'react';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.scss';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Main from '@/components/layout/Main';
import Sidebar from '@/components/layout/Sidebar';
import ToastContainer from '@/components/utils/ToastContainer';
import SessionProvider from '@/contexts/SessionContext';
import { SidebarProvider } from '@/contexts/SidebarContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { METADATA } from '@/utils/constant';
import ThemeInitializer from '@/utils/lightMode/ThemeInitializer';
import ComponentParentProps from '@/utils/types/node/componentParentProps';

const poppins = Poppins({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-poppins',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
	title: METADATA.TITLE,
	description: METADATA.DESCRIPTION,
	keywords: METADATA.KEYWORDS,
	assets: METADATA.ASSETS,
};

export default function RootLayout({ children }: ComponentParentProps) {
	return (
		<html lang="pl" data-color-mode="single" data-theme="light-default">
			<ToastProvider>
				<body className="relative bg-bg">
					<ThemeInitializer>
						<SessionProvider signUri="/auth">
							<SidebarProvider>
								<div id="container" className="h-auto min-h-fullContent w-full overflow-x-hidden">
									<Header />
									<Sidebar />
									<Main>{children}</Main>
									<Footer />
									<div id="modal"></div>
								</div>
								<ToastContainer />
							</SidebarProvider>
						</SessionProvider>
					</ThemeInitializer>
				</body>
			</ToastProvider>
		</html>
	);
}
