'use client';
import React, { useEffect } from 'react';

import Error from '@/components/common/Error';
import Loading from '@/components/common/Loading';
import Paginator from '@/components/common/page_content/Paginator';
import ResultCount from '@/components/common/page_content/sort_and_result/ResultCount';
import UserSortOrderBtn, {
	USER_ORDER_OPTIONS,
} from '@/components/users/manage_page/page_content/sort_and_result/UserSortOrderBtn';
import UserListBlock from '@/components/users/manage_page/page_content/UserListBlock';
import UserSearch from '@/services/user/types/userSearch';
import UserService from '@/services/user/userService';
import { Pageable } from '@/utils/api/types';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { UserSearchParams } from '@/utils/types';

interface UserResultsDisplayProps {
	searchParams: UserSearchParams;
	DetailsDropDownComponent: React.ComponentType<{ id: number }>;
}

export default function UserResultsDisplay({ searchParams, DetailsDropDownComponent }: UserResultsDisplayProps) {
	const { data: users, status, fetch: fetchUsers } = useFetchState<Pageable<UserSearch>>();

	useEffect(() => {
		fetchUsers(() => {
			return UserService.getUsers({
				size: searchParams.size,
				page: searchParams.page,
				sort: USER_ORDER_OPTIONS[searchParams.sort].field,
				sort_direction: USER_ORDER_OPTIONS[searchParams.sort].order,
				filters: searchParams.fields,
			});
		});
	}, [fetchUsers, searchParams]);

	if (status === Status.PENDING)
		return (
			<div className="pt-8">
				<Loading scale="small" />
			</div>
		);
	if (status === Status.ERROR || !users) return <Error />;

	return (
		<div className="py-2">
			<div className="flex w-full items-center justify-between px-4 pt-5">
				<UserSortOrderBtn activeSort={searchParams.sort} />
				<ResultCount value={users.content.length} />
			</div>
			<UserListBlock users={users.content} DetailsDropDownComponentProp={DetailsDropDownComponent} />
			<div className="flex w-full justify-center pt-6">
				<Paginator page={users.pageable.pageNumber + 1} total={users.totalPages} />
			</div>
		</div>
	);
}
