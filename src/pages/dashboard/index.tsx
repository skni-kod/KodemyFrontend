import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import AdminContent from '@/components/dashboard/AdminContent';

export const DashboardIndexRoute = '/dashboard';

const Index = () => {
	return (
		<Page
			title="Panel użytkownika"
			description="Widok zarządzania dodanymi materiałami i kontem"
		>
			<Container className="pt-28 mx-auto bg-white2verydarkgrey min-h-[100vh] min-w-[98vw] px-[10vw]">
				<AdminContent />
				{/* <UserContent /> */}
			</Container>
		</Page>
	);
};

export default Index;
