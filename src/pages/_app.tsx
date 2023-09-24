import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/common/sidebar/Sidebar";
import Navbar from "@/components/common/navbar/Navbar";
import Favicon from '@/assets/favicon.ico';
import Head from 'next/head';

export const Metadata = {
	title: "Kodemy",
	description: "Kodemy to najlepszy zbiór materiałów"
};

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={Favicon.src} />
			</Head>
			<Navbar />
			<Sidebar />
			<Component {...pageProps} />
		</>
	)
}