import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/common/navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Navbar/>
			<Component {...pageProps} />
		</>
	)
}