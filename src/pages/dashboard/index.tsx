import React from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';

const Index = () => {
	return (
		<Page title="Panel użytkownika" description="Widok zarządzania dodanymi materiałami i kontem">
			<Container className="mx-auto px-[10vw] bg-white2verydarkgrey">
				<h1 className="text-black2white">Strona z ustawieniami</h1>
			</Container>
		</Page>
	);
};

export default Index;
