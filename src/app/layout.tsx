import type { Metadata } from 'next';
import './globals.scss';
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import Main from '@/components/layout/Main';
import Footer from '@/components/layout/Footer';

import { Poppins } from 'next/font/google';
import { SidebarProvider } from '@/contexts/SidebarContext';
import { METADATA } from '@/utils/constant';
import ComponentParentProps from '@/utils/types/node/componentParentProps';
import SessionProvider from '@/contexts/SessionContext';
import { ToastProvider } from '@/contexts/ToastContext';
import ToastContainer from '@/components/utils/ToastContainer';

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
		<html lang="pl">
			<ToastProvider>
				<body className="dark-dimmed">
					<SessionProvider signUri="/auth">
						<SidebarProvider>
							<div id="container" className="h-auto min-h-fullContent w-full overflow-x-hidden">
								<Header />
								<Sidebar />
								<Main>{children}</Main>
								<Footer />
							</div>
							<ToastContainer />
						</SidebarProvider>
					</SessionProvider>
				</body>
			</ToastProvider>
		</html>
	);
}
