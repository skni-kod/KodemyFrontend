import React from 'react';
import MetadataProps from '@/utils/types/page/metadataProps';
import PageContent from '@/components/layout/PageContent';
import MaterialResultsDisplay from '@/components/materials/common/page_content/MaterialResultsDisplay';
import ManageDetailsDropDown from '@/components/materials/manage_page/page_content/material_dropdown/ManageDetailsDropDown';
import UserFiltersBlock from '@/components/users/manage_page/page_head/UserFiltersBlock';

type UsersManagePageContentProps = MetadataProps & {
	searchParams?: any;
};

export default function UsersManagePageContent({ title, searchParams }: UsersManagePageContentProps) {
	return (
		<PageContent headerValue={title}>
			<UserFiltersBlock fields={searchParams.fields ?? {}} />
			<MaterialResultsDisplay searchParams={searchParams} DetailsDropDownComponent={ManageDetailsDropDown} />
		</PageContent>
	);
}
