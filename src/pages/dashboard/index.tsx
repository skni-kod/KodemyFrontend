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
			<Container className="pt-28 mx-auto bg-white2verydarkgrey min-h-[91.4vh] min-w-[98vw] px-[10vw]">
				<AdminContent />
				{/* <UserContent /> */}
			</Container>
		</Page>
	);
};

export default Index;
