import React from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import { useCheckLoginStatus } from '@/components/login/CheckLoginStatus';
import RedirectionButton from '@/components/login/atoms/RedirectionButton';

const Index = () => {
	const isLoggedIn = useCheckLoginStatus();
	return (
		<Page title="Panel użytkownika" description="Widok zarządzania dodanymi materiałami i kontem">
			<Container className="mx-auto px-[10vw] bg-white2verydarkgrey">
				{isLoggedIn === true ? (
					<h1 className="text-black2white">Strona z dodawaniem materiałów</h1>
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
