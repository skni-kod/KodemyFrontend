import React from 'react';

import PageContent from '@/components/layout/PageContent';
import DetailsDropDown from '@/components/users/manage_page/page_content/user_dropdown/DetailsDropDown';
import UserFiltersBlock from '@/components/users/manage_page/page_head/UserFiltersBlock';
import UserResultsDisplay from '@/components/users/manage_page/UserResultsDisplay';
import { UserSearchParams } from '@/utils/types';
import MetadataProps from '@/utils/types/page/metadataProps';

type UsersManagePageContentProps = MetadataProps & {
	searchParams: UserSearchParams;
};

export default function UsersManagePageContent({ title, searchParams }: UsersManagePageContentProps) {
	return (
		<PageContent headerValue={title}>
			<UserFiltersBlock fields={searchParams.fields ?? {}} />
			<UserResultsDisplay searchParams={searchParams} DetailsDropDownComponent={DetailsDropDown} />
		</PageContent>
	);
}
