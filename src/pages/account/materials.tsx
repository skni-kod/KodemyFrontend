import React, { useEffect } from 'react';
import Page from '@/components/common/Page';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import MaterialsFiltersProvider from '@/contexts/MaterialsFiltersContext';
import { useAuthStore } from '@/store/authSlice';
import UserMaterialsContent from '@/components/account/UserMaterialsContent';
import Route from '@/utils/route';

const Index = () => {
	const pageLoginRoute = (): Route => {
		return {
			pathname: '/login',
		};
	};

	const router = useRouter();
	const { user } = useAuthStore();

	useEffect(() => {
		if (!user) {
			router.push(pageLoginRoute());
		}
	}, [router, user]);

	return (
		<Page
			title="Twoje materiały - Konto użytkownika"
			description="Widok zarządzania dodanymi materiałami"
		>
			<MaterialsFiltersProvider>
				<Container className="max-w-7xl mx-auto">
					<UserMaterialsContent />
				</Container>
			</MaterialsFiltersProvider>
		</Page>
	);
};

export default Index;
