import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import { Materials } from '@/pages/routes';
import UserContent from '@/components/dashboard/UserContent';
import AdminContent from '@/components/dashboard/AdminContent';

export const DashboardIndexRoute = '/dashboard';

const Index = () => {
	return (
		<Page
			title="Panel użytkownika"
			description="Widok zarządzania dodanymi materiałami i kontem"
		>
			<Container className="mt-28 max-w-7xl mx-auto">
				<UserContent />
				{/* <AdminContent/> */}
			</Container>
		</Page>
	);
};

export default Index;
