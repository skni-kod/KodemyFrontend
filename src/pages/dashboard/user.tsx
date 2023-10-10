import React from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import UserContent from '@/components/dashboard/UserContent';
import { useCheckLoginStatus } from '@/components/login/CheckLoginStatus';
import RedirectionButton from '@/components/login/atoms/RedirectionButton';

const Index = () => {
	const isLoggedIn = useCheckLoginStatus();
	return (
		<Page title="Panel użytkownika" description="Widok zarządzania dodanymi materiałami i kontem">
			<Container className="mx-auto px-[10vw] bg-white2verydarkgrey">
				{isLoggedIn === true ? (
					<UserContent />
				) : isLoggedIn === false ? (
					<RedirectionButton />
				) : (
					<RedirectionButton />
				)}
			</Container>
		</Page>
	);
};

export default Index;
