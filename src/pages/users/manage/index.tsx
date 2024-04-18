import Page from '@/components/layout/Page';
import React, { useEffect, useState } from 'react';
import { pageInitialState } from '@/utils/constant';
import Paginator from '@/components/materials/section_page/page_content/Paginator';
import ResultCount from '@/components/materials/section_page/page_content/sort_and_result/ResultCount';
import { Pageable } from '@/utils/model/Pageable';
import useUserService, { User } from '@/hooks/services/useUserService';
import UserBlock from '@/components/admin/users_page/page_content/UserBlock';
import DetailsDropDown from '@/components/admin/users_page/page_content/user_dropdown/DetailsDropDown';
import { useRouter } from 'next/router';
import { useFiltersContext } from '@/contexts/FiltersContext';
import {
	mapForUsers,
	PAGE_PARAM,
	SIZE_PARAM,
	SORT_DIRECTION_PARAM,
	SORT_PARAM,
} from '@/utils/filters';
import UserSortOrderBtn, {
	USER_ORDER_OPTIONS,
} from '@/components/admin/users_page/page_content/UserSortOrderBtn';
import Head from 'next/head';
import { generateTitle } from '@/pages/_app';

export default function UsersManage() {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const { setFilters } = useFiltersContext();
	const [users, setUsers] = useState<Pageable<User>>(pageInitialState);
	const { getUsers } = useUserService();

	useEffect(() => {
		const filtersParams = mapForUsers(router.query);
		setFilters(filtersParams);
		(async () => {
			try {
				const sortElement = USER_ORDER_OPTIONS.find(
					({ field, order }) =>
						field === filtersParams[SORT_PARAM] && order === filtersParams[SORT_DIRECTION_PARAM],
				);
				setUsers(
					await getUsers({
						size: filtersParams[SIZE_PARAM] ? +filtersParams[SIZE_PARAM] : 20,
						page: filtersParams[PAGE_PARAM] ? +filtersParams[PAGE_PARAM] : 0,
						sort: (sortElement && sortElement.apiField) || 'createdDate',
						sortDirection: 'DESC',
						searchFields: undefined,
					}),
				);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [router.query, getUsers, setFilters]);

	if (isLoading) return null;

	return (
		<Page>
			<Head>
				<title>{generateTitle("Użytkownicy")}</title>
			</Head>
			<div>
				<h2 className="w-full text-4xl text-semibold">Użytkownicy</h2>
				<div className="py-2">
					<div className="flex justify-between items-center w-full px-4 pt-5">
						<UserSortOrderBtn />
						<ResultCount value={users.content.length} />
					</div>
					<div className="flex flex-col gap-6 w-full pt-5">
						{users.content.map((user, index) => (
							<UserBlock key={index} data={user}>
								<DetailsDropDown id={user.id} />
							</UserBlock>
						))}
					</div>
					<div className="flex justify-center w-full pt-6">
						<Paginator page={users.pageable.pageNumber} total={users.totalPages} />
					</div>
				</div>
			</div>
		</Page>
	);
}
