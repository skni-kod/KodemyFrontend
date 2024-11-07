'use client';
import React, { useCallback, useEffect } from 'react';
import { MaterialSearchParams } from '@/utils/types';
import PageContent from '@/components/layout/PageContent';
import SectionService from '@/services/section/sectionService';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import { Section } from '@/services/section/types';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import MaterialResultsDisplay from '@/components/materials/common/page_content/MaterialResultsDisplay';
import DetailsDropDown from '@/components/materials/section_by_id_page/page_content/material_dropdown/DetailsDropDown';
import MetadataProps from '@/utils/types/page/metadataProps';
import FiltersBlock from '@/components/materials/common/page_head/FiltersBlock';
import CategoryBubbleBtns from '@/components/materials/section_by_id_page/page_head/CategoryBubbleBtns';

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

	if (status === Status.PENDING) return <Loading full />;

	return (
		<PageContent headerValue={findSectionName()}>
			{status === Status.ERROR || !sections ? (
				<Error container />
			) : (
				<>
					<CategoryBubbleBtns
						sections={sections}
						activeSectionId={sectionId}
						activesCategoryIds={searchParams.fields?.categoryIds}
					/>
					<FiltersBlock fields={searchParams.fields ?? {}} />
					<MaterialResultsDisplay searchParams={searchParams} DetailsDropDownComponent={DetailsDropDown} />
				</>
			)}
		</PageContent>
	);
}
