import HomeShowSection from '@/components/home/HomeShowSection';
import HomeSuggestedSection from '@/components/home/HomeSuggestedSection';
import PageContent from '@/components/layout/PageContent';

import React from 'react';
import Container from '@/components/layout/Container';

export default function HomePageContent() {
	return (
		<PageContent noHeader noContainer>
			<HomeShowSection />
			<Container>{/*<HomeSuggestedSection />*/}</Container>
		</PageContent>
	);
}
