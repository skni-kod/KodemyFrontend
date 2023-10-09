import React, { useState, useEffect } from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import AdminContent from '@/components/dashboard/AdminContent';
import ErrorPage from '../404';

const Index = () => {
	const [userHasPermission, setUserHasPermission] = useState(false);

	useEffect(() => {
		fetch('http://localhost:8181/api/users/me')
			.then((response) => {
				if (response.ok) {
					setUserHasPermission(true);
				} else {
					setUserHasPermission(false);
				}
			})
			.catch((error) => {
				console.error('Błąd zapytania:', error);
			});
	}, []);

	return (
		<Page title="Panel użytkownika" description="Widok zarządzania dodanymi materiałami i kontem">
			<Container className="mx-auto px-[10vw] bg-white2verydarkgrey">
				{userHasPermission ? <AdminContent /> : <ErrorPage />}
			</Container>
		</Page>
	);
};

export default Index;
