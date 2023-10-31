import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authSlice';
import { useEffect } from 'react';
import UserProfileContent from '@/components/account/index/UserProfileContent';
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
		<Page title="Konto - Panel użytkownika" description="Widok konta użytkownika">
			<Container className="max-w-7xl mx-auto">
				<UserProfileContent />
			</Container>
		</Page>
	);
};

export default Index;
