import React, { useEffect } from 'react';
import Page from '@/components/common/Page';
import AdminMaterialsContent from '@/components/admin/materials/AdminMaterialsContent';
import { page404Route } from '../404';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import MaterialsFiltersProvider from '@/contexts/MaterialsFiltersContext';
import { AuthUserRoleType, useAuthStore } from '@/store/authSlice';

const Index = () => {
	const router = useRouter();
	const { user } = useAuthStore();

	useEffect(() => {
		if (!user || (user && user.role.name === AuthUserRoleType[AuthUserRoleType.ROLE_USER])) {
			router.push(page404Route());
		}
	}, [router, user]);

	return (
		<Page
			title="Statusy materiałów - Panel administracyjny"
			description="Widok zarządzania dodanymi materiałami"
		>
			<MaterialsFiltersProvider>
				<Container className="max-w-7xl mx-auto">
					<AdminMaterialsContent />
				</Container>
			</MaterialsFiltersProvider>
		</Page>
	);
};

export default Index;
