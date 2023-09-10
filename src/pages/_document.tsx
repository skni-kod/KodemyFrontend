import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
	title: "Kodemy",
	description: "Kodemy to najlepszy zbiór materiałów"
};

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className="bg-body">
			<Main />
			<NextScript />
			</body>
		</Html>
	);
}