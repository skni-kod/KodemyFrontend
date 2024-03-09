import React, { useEffect } from 'react';
import Page from '@/components_v2/common/Page';
import { useRouter } from 'next/router';
import Container from '@/components_v2/common/Container';
import FiltersProvider from '@/contexts/FiltersContext';
import { useAuthStore } from '@/store/authSlice';
import UserMaterialsContent from '@/components_v2/account/materials/UserMaterialsContent';
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
			<FiltersProvider>
				<Container className="max-w-7xl mx-auto">
					<UserMaterialsContent />
				</Container>
			</FiltersProvider>
		</Page>
	);
};

export default Index;
