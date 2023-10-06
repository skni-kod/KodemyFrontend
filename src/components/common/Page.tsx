import React from 'react';
import Head from 'next/head';
import { Metadata } from '@/pages/_app';

interface PageProps {
	title: string;
	description?: string;
	addTags?: React.ReactNode;
	children: React.ReactNode;
	customTitle?: boolean;
}

const Page = ({
	title: pageTitle,
	description,
	addTags = null,
	children,
	customTitle = false,
}: PageProps) => {
	const title = !customTitle ? `${pageTitle} - ${Metadata.title}` : pageTitle;
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta
					name="description"
					content={description ? description : Metadata.description}
				/>
				{addTags}
			</Head>
			{children}
		</>
	);
};

export default Page;
