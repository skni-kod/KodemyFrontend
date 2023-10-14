import React, { useEffect } from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import { useRouter } from 'next/router';
import { AuthUserRoleType, useAuthStore } from '@/store/authSlice';
import { page404Route } from '@/pages/404';

const Index = () => {
	const router = useRouter();
	const { user } = useAuthStore();

	useEffect(() => {
		if (!user || (user && user.role.name === AuthUserRoleType.ROLE_USER)) {
			router.push(page404Route());
		}
	}, [router, user]);

	return (
		<Page title="Użytkownicy - Panel administracyjny" description="Widok zarządzania użytkownikami">
			<Container className="max-w-7xl mx-auto">
				<></>
			</Container>
		</Page>
	);
};

export default Index;
