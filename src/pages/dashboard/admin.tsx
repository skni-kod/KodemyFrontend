import React, { useState, useEffect } from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import AdminContent from '@/components/dashboard/AdminContent';
import ErrorPage from '../404';
import { CheckPermission } from '@/components/login/CheckPermission';

const Index = () => {
	const [userHasPermission, setUserPermission] = useState(false);

	useEffect(() => {
		CheckPermission().then((hasPermission) => {
			setUserPermission(hasPermission);
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
