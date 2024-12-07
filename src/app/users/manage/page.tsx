import React from 'react';
import { Metadata } from 'next';

import UsersManagePageContent from '@/components/users/manage_page/UsersManagePageContent';
import { SortDirection } from '@/utils/api/types';
import { DEFAULT_PAGE_SIZE, DEFAULT_USER_PAGE_SORT, PAGE_TITLE } from '@/utils/constant';
import { parseFieldsFromURLSearchParam } from '@/utils/methods';
import { SearchParams, UserSearchParams } from '@/utils/types';
import PageQueryProps from '@/utils/types/page/pageQueryProps';

export const metadata: Metadata = {
	title: PAGE_TITLE.USERS_MANAGE,
};

type PageProps = PageQueryProps<SearchParams<string>> & {};

export default async function UsersManagePage({ searchParams }: PageProps) {
	const resolvedSearchParams = await searchParams;

	const userSearchParams: UserSearchParams = {
		page: resolvedSearchParams?.page ?? 1,
		size: resolvedSearchParams?.size ?? DEFAULT_PAGE_SIZE,
		sort: resolvedSearchParams?.sort ?? DEFAULT_USER_PAGE_SORT,
		sort_direction: SortDirection.ASC,
		fields: parseFieldsFromURLSearchParam(resolvedSearchParams?.fields),
	};

	return <UsersManagePageContent title={metadata.title?.toString() ?? ''} searchParams={userSearchParams} />;
}
