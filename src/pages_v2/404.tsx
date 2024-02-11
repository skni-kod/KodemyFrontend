import React from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import Route from '@/utils/route';

export const page404Route = (): Route => {
	return {
		pathname: '/404',
	};
};

const ErrorPage = () => (
	<Page title="404" description="Błąd 404 - strona nie istnieje">
		<Container className="pt-[7.4vh] bg-white2verydarkgrey min-h-[100vh]">
			<div className="pt-[5vh] max-w-7xl mx-auto text-center">
				<h2 className="text-xl text-bold text-black2white">Błąd 404</h2>
				<p className="text-l text-black2white">
					Poszukiwana strona nie istnieje
				</p>
			</div>
		</Container>
	</Page>
);

export default ErrorPage;
