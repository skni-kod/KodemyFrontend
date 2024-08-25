'use client';
import React, { useState } from 'react';
import { MaterialSearchParams } from '@/utils/types';
import SectionBubbleBtns from '@/components/materials/manage_page/page_head/SectionBubbleBtns';
import MaterialResultsDisplay from '@/components/materials/common/page_content/MaterialResultsDisplay';
import ManageDetailsDropDown from '@/components/materials/manage_page/page_content/material_dropdown/ManageDetailsDropDown';
import PageContent from '@/components/layout/PageContent';
import DetailsDropDown from '@/components/materials/section_by_id_page/page_content/material_dropdown/DetailsDropDown';
import MetadataProps from '@/utils/types/page/metadataProps';
import FiltersBlock from '@/components/materials/common/page_head/FiltersBlock';

type MaterialsByUserIdPageContentProps = MetadataProps & {
	id: number;
	searchParams: MaterialSearchParams;
};

export default function MaterialsByUserIdPageContent({
	title,
	id: userId,
	searchParams,
}: MaterialsByUserIdPageContentProps) {
	/* TODO fetch user from API */
	const [user, setUser] = useState({
		id: 1,
		username: 'ExampleUserName',
	});

	return (
		<PageContent headerValue={'Materiały: ' + user.username}>
			<SectionBubbleBtns activesCategoryIds={searchParams.fields?.categoryIds} />
			<FiltersBlock fields={searchParams.fields ?? {}} />
			<MaterialResultsDisplay
				searchParams={searchParams}
				DetailsDropDownComponent={false ? ManageDetailsDropDown : DetailsDropDown}
			/>
		</PageContent>
	);
}
