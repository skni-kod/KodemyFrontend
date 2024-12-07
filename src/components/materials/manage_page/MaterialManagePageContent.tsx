import React from 'react';

import PageContent from '@/components/layout/PageContent';
import MaterialResultsDisplay from '@/components/materials/common/page_content/MaterialResultsDisplay';
import FiltersBlock from '@/components/materials/common/page_head/FiltersBlock';
import ManageDetailsDropDown from '@/components/materials/manage_page/page_content/material_dropdown/ManageDetailsDropDown';
import SectionBubbleBtns from '@/components/materials/manage_page/page_head/SectionBubbleBtns';
import { MaterialSearchParams } from '@/utils/types';
import MetadataProps from '@/utils/types/page/metadataProps';

type MaterialManagePageContentProps = MetadataProps & {
	searchParams: MaterialSearchParams;
};

export default function MaterialManagePageContent({ title, searchParams }: MaterialManagePageContentProps) {
	return (
		<PageContent headerValue={title}>
			<SectionBubbleBtns />
			<FiltersBlock searchParams={searchParams} />
			<MaterialResultsDisplay searchParams={searchParams} DetailsDropDownComponent={ManageDetailsDropDown} />
		</PageContent>
	);
}
