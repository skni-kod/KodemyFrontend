import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import LoginPage from '@/components/login/login';
import Route from '@/utils/route';
import { useCheckLoginStatus } from '@/components/login/CheckLoginStatus';

export const pageLoginRoute = (): Route => {
	return {
		pathname: '/login',
	};
};

const Index = () => {
	const isLoggedIn = useCheckLoginStatus();
	return (
		<Page title="Panel logowania" description="Panel logowania">
			<Container>
				{isLoggedIn === false ? (
					<LoginPage />
				) : isLoggedIn === true ? (
					<div className="h-[auto] flex items-center justify-center">
						<h1 className="text-black2white text-[20px]">Już jesteś zalogowany</h1>
					</div>
				) : (
					<div className="h-[auto] flex items-center justify-center">
						<h1 className="text-black2white text-[20px]">Już jesteś zalogowany</h1>
					</div>
				)}
			</Container>
		</Page>
	);
};

export default Index;
