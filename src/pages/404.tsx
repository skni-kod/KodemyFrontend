import React from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';

const ErrorPage = () => (
	<Page title="404" description="Błąd 404 - strona nie istnieje">
		<Container className="mt-28 max-w-7xl mx-auto text-center">
			<div>
				<h2 className="text-xl text-bold">Błąd 404</h2>
				<p className="text-l">Poszukiwana strona nie istnieje</p>
			</div>
		</Container>
	</Page>
);

export default ErrorPage;
