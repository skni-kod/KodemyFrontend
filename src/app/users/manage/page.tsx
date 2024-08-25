import React from 'react';
import { Metadata } from 'next';
import UsersManagePageContent from '@/components/users/manage_page/UsersManagePageContent';
import { PAGE_TITLE } from '@/utils/constant';
import PageQueryProps from '@/utils/types/page/pageQueryProps';

export const metadata: Metadata = {
	title: PAGE_TITLE.USERS_MANAGE,
};

type PageProps = PageQueryProps<any> & {};

export default function UsersManagePage({ searchParams }: PageProps) {
	return <UsersManagePageContent title={metadata.title?.toString() ?? ''} searchParams={searchParams ?? {}} />;
}
