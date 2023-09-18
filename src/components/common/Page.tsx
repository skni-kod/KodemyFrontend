import React from "react";
import Head from "next/head";
import { Metadata } from "@/pages/_app";

interface PageProps {
	title: string;
	description?: string;
	children: React.ReactNode;
}

const Page = ({ title, description, children }: PageProps) => {
	return (
		<>
			<Head>
				<title>{title} - {Metadata.title}</title>
				<meta name="description" content={description ? description : Metadata.description} />
			</Head>
			{children}
		</>
	);
};

export default Page;