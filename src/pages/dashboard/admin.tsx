import React, { useEffect } from 'react';
import Page from '@/components/common/Page';
import AdminContent from '@/components/dashboard/AdminContent';
import { page404Route } from '../404';
import checkPermission from '@/components/login/checkPermission';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import MaterialsFiltersProvider from '@/contexts/MaterialsFiltersContext';

const Index = () => {
	const router = useRouter();

	useEffect(() => {
		checkPermission().then((hasPermission) => {
			if (!hasPermission) {
				router.push(page404Route());
				return;
			}
		});
	}, [router]);

	return (
		<Page title="Panel użytkownika" description="Widok zarządzania dodanymi materiałami i kontem">
			<MaterialsFiltersProvider>
				<Container className="max-w-7xl mx-auto">
					<AdminContent />
				</Container>
			</MaterialsFiltersProvider>
		</Page>
	);
};

export default Index;
