import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import LoginPage from '@/components/login/login';

const Index = () => {
	return (
		<Page title="Panel logowania" description="Panel logowania">
			<Container>
				<LoginPage />
			</Container>
		</Page>
	);
};

export default Index;
