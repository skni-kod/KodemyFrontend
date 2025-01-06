'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import HomeShowSection from '@/components/home/HomeShowSection';
import PageContent from '@/components/layout/PageContent';

interface HomePageContentProps {
	searchParams?: { logout: string };
}

export default function HomePageContent({ searchParams }: HomePageContentProps) {
	const router = useRouter();

	useEffect(() => {
		if (searchParams?.logout !== undefined) {
			const url = new URL(window.location.href + '/auth');
			url.searchParams.delete('logout');
			router.replace(url.toString());
		}
	}, [searchParams, router]);

	return (
		<PageContent noHeader noContainer>
			<HomeShowSection />
			{/* <Container><HomeSuggestedSection /></Container> */}
		</PageContent>
	);
}
