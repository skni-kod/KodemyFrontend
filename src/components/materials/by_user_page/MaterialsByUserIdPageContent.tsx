'use client';
import React from 'react';
import { MaterialSearchParams } from '@/utils/types';
import SectionBubbleBtns from '@/components/materials/manage_page/page_head/SectionBubbleBtns';
import MaterialResultsDisplay from '@/components/materials/common/page_content/MaterialResultsDisplay';
import PageContent from '@/components/layout/PageContent';
import DetailsDropDown from '@/components/materials/section_by_id_page/page_content/material_dropdown/DetailsDropDown';
import MetadataProps from '@/utils/types/page/metadataProps';
import FiltersBlock from '@/components/materials/common/page_head/FiltersBlock';
import { useSessionContext } from '@/contexts/SessionContext';
import { PAGE_TITLE } from '@/utils/constant';

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
