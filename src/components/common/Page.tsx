import React from 'react';
import Head from 'next/head';
import { Metadata } from '@/pages/_app';

interface PageProps {
	title: string;
	description?: string;
	addTags?: React.ReactNode;
	children: React.ReactNode;
	customTitle?: boolean;
	afterClassName?: string;
}

const Page = ({
	title: pageTitle,
	description,
	addTags = null,
	children,
	customTitle = false,
	afterClassName,
}: PageProps) => {
	const title = !customTitle ? `${pageTitle} - ${Metadata.title}` : pageTitle;
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description ? description : Metadata.description} />
				{addTags}
			</Head>
			<div className={`min-h-[100vh] w-full pt-28 bg-white2verydarkgrey ${afterClassName ? afterClassName : ''}`}>
				{children}
			</div>
		</>
	);
};

export default Page;
