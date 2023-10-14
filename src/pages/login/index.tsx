import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import LoginContent from '@/components/login/login';
import { useAuthStore } from '@/store/authSlice';
import { useEffect } from 'react';
import { pageHomeRoute } from '@/pages/route';
import { useRouter } from 'next/router';

const Index = () => {
	const { user } = useAuthStore();
	const router = useRouter();

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
