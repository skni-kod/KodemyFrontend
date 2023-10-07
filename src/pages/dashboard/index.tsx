import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import AdminContent from '@/components/dashboard/AdminContent';
import Route from '@/utils/route';

export const pageDashboardRoute = (): Route => {
	return {
		pathname: '/dashboard',
	};
};

const Index = () => {
	return (
		<Page
			title="Panel użytkownika"
			description="Widok zarządzania dodanymi materiałami i kontem"
		>
			<Container className="mx-auto px-[10vw] bg-white2verydarkgrey">
				<AdminContent />
				{/* <UserContent /> */}
			</Container>
		</Page>
	);
};

export default Index;
