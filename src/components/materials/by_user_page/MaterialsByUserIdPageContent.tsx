'use client';
import React from 'react';

import PageContent from '@/components/layout/PageContent';
import MaterialResultsDisplay from '@/components/materials/common/page_content/MaterialResultsDisplay';
import FiltersBlock from '@/components/materials/common/page_head/FiltersBlock';
import SectionBubbleBtns from '@/components/materials/manage_page/page_head/SectionBubbleBtns';
import DetailsDropDown from '@/components/materials/section_by_id_page/page_content/material_dropdown/DetailsDropDown';
import { useSessionContext } from '@/contexts/SessionContext';
import { PAGE_TITLE } from '@/utils/constant';
import { MaterialSearchParams } from '@/utils/types';
import MetadataProps from '@/utils/types/page/metadataProps';

type MaterialsByUserIdPageContentProps = MetadataProps & {
	id: number;
	searchParams: MaterialSearchParams;
};

export default function MaterialsByUserIdPageContent({
	title,
	id: userId,
	searchParams,
}: MaterialsByUserIdPageContentProps) {
	const { session } = useSessionContext();

	return (
		<PageContent headerValue={session ? 'Materiały: ' + session.user.username : PAGE_TITLE.MATERIAL_BY_USER}>
			<SectionBubbleBtns />
			<FiltersBlock searchParams={searchParams} />
			<MaterialResultsDisplay searchParams={searchParams} DetailsDropDownComponent={DetailsDropDown} />
		</PageContent>
	);
}
