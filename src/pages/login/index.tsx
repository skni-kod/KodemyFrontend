import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import LoginContent from '@/components/login/login';
import { useAuthStore } from '@/store/authSlice';
import { useEffect } from 'react';
import { pageHomeRoute } from '@/pages';
import { useRouter } from 'next/router';

const Index = () => {
	const { isAuth } = useAuthStore();
	const router = useRouter();

	useEffect(() => {
		if (isAuth()) router.push(pageHomeRoute());
	}, [isAuth, router]);

	return (
		<Page title="Panel logowania" description="Panel logowania">
			<Container className="max-w-7xl mx-auto">{!isAuth() && <LoginContent />}</Container>
		</Page>
	);
};

export default Index;
