import React from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import { useCheckLoginStatus } from '@/components/login/CheckLoginStatus';
import RedirectionButton from '@/components/login/atoms/RedirectionButton';

const Index = () => {
	return (
		<Page title="Ustawienia - Panel użytkownika" description="Widok ustawień konta">
			<Container className="max-w-7xl mx-auto">
				<></>
			</Container>
		</Page>
	);
};

export default Index;
