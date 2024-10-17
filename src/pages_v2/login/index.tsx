import Page from '@/components/common/Page';
import Route from '@/utils/route';
import Container from '@/components/common/Container';
import { useAuthStore } from '@/store/authSlice';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import LoginContent from '@/components/login/login';

const Index = () => {
	const { user } = useAuthStore();
	const router = useRouter();

	const pageHomeRoute = (): Route => {
		return {
			pathname: '/',
		};
	};

	useEffect(() => {
		if (user) router.push(pageHomeRoute());
	}, [user, router]);

	return (
		<Page title="Panel logowania" description="Panel logowania">
			<Container className="max-w-7xl mx-auto">{!user && <LoginContent />}</Container>
		</Page>
	);
};

export default Index;
