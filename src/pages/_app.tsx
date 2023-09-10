import "../styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/common/sidebar/Sidebar";
import Navbar from "@/components/common/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Component {...pageProps} />
		</>
	)
}