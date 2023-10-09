import React from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import UserContent from '@/components/dashboard/UserContent';

const Index = () => {
	return (
		<Page title="Panel użytkownika" description="Widok zarządzania dodanymi materiałami i kontem">
			<Container className="mx-auto px-[10vw] bg-white2verydarkgrey">
				<UserContent />
			</Container>
		</Page>
	);
};

export default Index;
