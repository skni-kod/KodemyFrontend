import React, { useEffect } from 'react';
import Page from '@/components/common/Page';
import AdminMaterialsContent from '@/components/admin/AdminMaterialsContent';
import { page404Route } from '../404';
import checkPermission from '@/components/login/checkPermission';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import MaterialsFiltersProvider from '@/contexts/MaterialsFiltersContext';
import { useAuthStore } from '@/store/authSlice';
import { pageLoginRoute } from '@/pages/route';

const Index = () => {
	const router = useRouter();
	const { user } = useAuthStore();

	if (!user) {
		router.push(pageLoginRoute());
	}

	return (
		<Page
			title="Twoje materiały - Konto użytkownika"
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
