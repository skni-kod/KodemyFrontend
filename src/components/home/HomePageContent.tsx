import React from 'react';

import HomeShowSection from '@/components/home/HomeShowSection';
import Container from '@/components/layout/Container';
import PageContent from '@/components/layout/PageContent';

export default function HomePageContent() {
	return (
		<PageContent noHeader noContainer>
			<HomeShowSection />
			<Container>{/*<HomeSuggestedSection />*/}</Container>
		</PageContent>
	);
}
