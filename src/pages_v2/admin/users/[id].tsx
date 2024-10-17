import React, { useEffect, useState } from 'react';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import { useRouter } from 'next/router';
import { page404Route } from '@/pages/404';
import Route from '@/utils/route';
import { AdminUsersContent } from '@/components/admin/users/AdminUsersContent';
import fetchAllUsers from '@/hooks/data/fetchAllUsers';

interface UserData {
	id: string;
	username: string;
	email: string | null;
	createdDate: string;
	photo: string;
	role: {
		name: string;
	};
}

export const pageCategoryIdRoute = (id: number): Route => {
	return {
		pathname: '/category/[id]',
		query: { id },
	};
};

const Id = () => {
	const router = useRouter();
	const [id, setId] = useState<number>(
		typeof router.query.id === 'string' ? Number(router.query.id) : 1,
	);
	const [adminUserBlocks, setAdminUserBlocks] = useState<UserData[]>([]);
	const [totalElements, setTotalElements] = useState(0);
	const [totalPages, setTotalPages] = useState(0);
	const [isFetching, setIsFetching] = useState(true);

	const itemsPerPage = 10;

	useEffect(() => {
		const fetchData = async () => {
			try {
				await fetchAllUsers(
					Number(id),
					itemsPerPage,
					setAdminUserBlocks,
					setTotalElements,
					setTotalPages,
					setIsFetching,
				);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		const { id } = router.query;

		if (typeof id === 'string') {
			if (/^[0-9]+$/.test(id)) {
				fetchData();
			} else {
				router.push(page404Route());
			}
		}
	}, [
		id,
		router,
		router.query,
		router.asPath,
		setId,
		itemsPerPage,
		setAdminUserBlocks,
		setTotalElements,
		setTotalPages,
		setIsFetching,
	]);

	return (
		<Page title="Użytkownicy - Panel administracyjny" description="Widok zarządzania użytkownikami">
			<Container className="max-w-7xl mx-auto">
				<AdminUsersContent
					currentPageForUsers={Number(id)}
					currentPageForButtons={Number(router.query.id)}
					setCurrentPage={(id) => router.push(pageCategoryIdRoute(Number(id)))}
					adminUserBlocks={adminUserBlocks}
					totalItems={totalElements}
					isFetching={isFetching}
					totalPages={totalPages}
					itemsPerPage={itemsPerPage}
				/>
			</Container>
		</Page>
	);
};

export default Id;
