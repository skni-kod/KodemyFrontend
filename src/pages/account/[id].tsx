import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import { useRouter } from 'next/router';
import { useAuthStore } from '@/store/authSlice';
import { useEffect, useState } from 'react';
import UserProfileContent from '@/components/account/index/UserProfileContent';
import Route from '@/utils/route';
import { page404Route } from '../404';

export const pageAccountIdRoute = (id: number): Route => {
	return {
		pathname: '/account/[id]',
		query: { id },
	};
};

const Id = () => {
	const router = useRouter();
	const [id, setId] = useState<number>(
		typeof router.query.id === 'string' ? Number(router.query.id) : 1,
	);

	useEffect(() => {
		const { id } = router.query;
		if (typeof id === 'string') {
			if (/^[0-9]+$/.test(id)) setId(parseInt(id));
			else router.push(page404Route());
		}
	}, [router, router.query, router.asPath]);

	return (
		<Page title="Konto - Panel użytkownika" description="Widok konta użytkownika">
			<Container className="max-w-7xl mx-auto">
				<UserProfileContent id={id} />
			</Container>
		</Page>
	);
};

export default Id;