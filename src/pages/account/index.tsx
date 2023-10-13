import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authSlice';
import { pageLoginRoute } from '@/pages/route';

const Index = () => {
	const router = useRouter();
	const { user } = useAuthStore();

	if (!user) {
		router.push(pageLoginRoute());
	}

	return (
		<Page title="Konto - Panel użytkownika" description="Widok konta użytkownika">
			<Container className="max-w-7xl mx-auto">
				<></>
			</Container>
		</Page>
	);
};

export default Index;
