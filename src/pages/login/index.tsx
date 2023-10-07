import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import LoginPage from '@/components/login/login';
import Route from '@/utils/route';

export const pageLoginRoute = (): Route => {
	return {
		pathname: '/login',
	};
};

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
