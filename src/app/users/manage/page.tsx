import React from 'react';
import { Metadata } from 'next';
import UsersManagePageContent from '@/components/users/manage_page/UsersManagePageContent';
import { DEFAULT_MATERIAL_PAGE_SORT, DEFAULT_PAGE_SIZE, PAGE_TITLE } from '@/utils/constant';
import PageQueryProps from '@/utils/types/page/pageQueryProps';
import { SearchParams, UserSearchParams } from '@/utils/types';
import { parseFieldsFromURLSearchParam } from '@/utils/methods';

export const metadata: Metadata = {
	title: PAGE_TITLE.USERS_MANAGE,
};

type PageProps = PageQueryProps<SearchParams<string>> & {};

export default function UsersManagePage({ searchParams }: PageProps) {
	const userSearchParams: UserSearchParams = {
		page: searchParams?.page ?? 1,
		size: searchParams?.size ?? DEFAULT_PAGE_SIZE,
		sort: searchParams?.sort ?? DEFAULT_MATERIAL_PAGE_SORT,
		fields: parseFieldsFromURLSearchParam(searchParams?.fields),
	};

	return <UsersManagePageContent title={metadata.title?.toString() ?? ''} searchParams={userSearchParams} />;
}
