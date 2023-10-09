import React from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import FavouriteContent from '@/components/dashboard/FavouriteContent';

const Index = () => {
	return (
		<Page title="Panel użytkownika" description="Widok zarządzania dodanymi materiałami i kontem">
			<Container className="mx-auto px-[10vw] bg-white2verydarkgrey">
				<FavouriteContent />
			</Container>
		</Page>
	);
};

export default Index;
