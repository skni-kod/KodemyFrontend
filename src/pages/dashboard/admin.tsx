import React, { useState, useEffect } from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import AdminContent from '@/components/dashboard/AdminContent';
import ErrorPage from '../404';
import checkPermission from '@/components/login/checkPermission';
import MaterialsFiltersProvider from '@/contexts/MaterialsFiltersContext';

const Index = () => {
	const [userHasPermission, setUserPermission] = useState(false);

	useEffect(() => {
		checkPermission().then((hasPermission) => {
			setUserPermission(hasPermission);
		});
	}, []);

	return (
		<Page title="Panel użytkownika" description="Widok zarządzania dodanymi materiałami i kontem">
			<MaterialsFiltersProvider>
				<Container className="max-w-7xl mx-auto">
					{userHasPermission ? <AdminContent /> : <ErrorPage />}
				</Container>
			</MaterialsFiltersProvider>
		</Page>
	);
};

export default Index;
