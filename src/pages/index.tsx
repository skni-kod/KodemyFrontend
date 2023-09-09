import { metadata } from "@/pages/_document";
import Head from "next/head";
import Favicon from "@/assets/favicon.ico";

export default function Home() {
	return (
		<>
			<Head>
				<title>{metadata.title as string}</title>
				<meta name="description" content={metadata.description as string} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={Favicon.src} />
			</Head>
			<main>
				HOME
			</main>
		</>
	);
}