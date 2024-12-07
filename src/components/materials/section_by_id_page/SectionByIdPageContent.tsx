'use client';
import React, { useCallback, useEffect } from 'react';

import Error from '@/components/common/Error';
import Loading from '@/components/common/Loading';
import PageContent from '@/components/layout/PageContent';
import MaterialResultsDisplay from '@/components/materials/common/page_content/MaterialResultsDisplay';
import FiltersBlock from '@/components/materials/common/page_head/FiltersBlock';
import DetailsDropDown from '@/components/materials/section_by_id_page/page_content/material_dropdown/DetailsDropDown';
import CategoryBubbleBtns from '@/components/materials/section_by_id_page/page_head/CategoryBubbleBtns';
import SectionService from '@/services/section/sectionService';
import { Section } from '@/services/section/types';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { MaterialSearchParams } from '@/utils/types';
import MetadataProps from '@/utils/types/page/metadataProps';

type SectionByIdPageContentProps = MetadataProps & {
	id: number;
	searchParams: MaterialSearchParams;
};

export default function SectionByIdPageContent({ title, id: sectionId, searchParams }: SectionByIdPageContentProps) {
	const { data: sections, status, fetch: fetchSections } = useFetchState<Section[]>(Status.SUCCESS);

	useEffect(() => fetchSections(SectionService.getSections), [fetchSections]);

	const findSectionName = useCallback(() => {
		return (sections && sections.find((section) => section.id === sectionId)?.name) || title;
	}, [sectionId, sections, title]);

	if (status === Status.ERROR) return <Error container />;

	return (
		<PageContent headerValue={findSectionName()}>
			{status === Status.PENDING || !sections ? (
				<Loading full />
			) : (
				<>
					<CategoryBubbleBtns
						sections={sections}
						activeSectionId={sectionId}
						activesCategoryIds={searchParams.fields?.categoryIds}
					/>
					<FiltersBlock searchParams={searchParams} />
					<MaterialResultsDisplay searchParams={searchParams} DetailsDropDownComponent={DetailsDropDown} />
				</>
			)}
		</PageContent>
	);
}
