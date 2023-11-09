import React, { useEffect, useState } from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import { useRouter } from 'next/router';
import { page404Route } from '@/pages/404';

import Route from '@/utils/route';
import { AdminUsersContent } from '@/components/admin/users/AdminUsersContent';

export const pageCategoryIdRoute = (id: number): Route => {
	return {
		pathname: '/category/[id]',
		query: { id },
	};
};

const Id = () => {
	const [id, setId] = useState<number | undefined>(undefined);
	const router = useRouter();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const { id } = router.query;
		if (typeof id === 'string') {
			if (/^[0-9]+$/.test(id)) setId(parseInt(id));
			else router.push(page404Route());
		}
	}, [router, router.query, router.asPath]);

	return (
		<Page title="Użytkownicy - Panel administracyjny" description="Widok zarządzania użytkownikami">
			<Container className="max-w-7xl mx-auto">
				<AdminUsersContent currentPage={currentPage} setCurrentPage={setCurrentPage} />
			</Container>
		</Page>
	);
};

export default Id;
