import React from 'react';
import { isNumber, parseFieldsFromURLSearchParam } from '@/utils/methods';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import SectionByIdPageContent from '@/components/materials/section_by_id_page/SectionByIdPageContent';
import { MaterialSearchParams, SearchParams } from '@/utils/types';
import { DEFAULT_PAGE_SIZE, PAGE_TITLE } from '@/utils/constant';
import { MaterialSortField } from '@/services/material/types';
import { SortDirection } from '@/utils/api/types';

export const metadata: Metadata = {
	title: PAGE_TITLE.SECTION_BY_ID,
};

interface SectionByIdPageProps {
	params: Promise<{ id: string }>;
	searchParams: Promise<SearchParams<string>>;
}

export default async function SectionByIdPage({ params, searchParams }: SectionByIdPageProps) {
	const resolvedParams = await params;
	const resolvedSearchParams = searchParams ? await searchParams : {};

	const sectionId = Number(resolvedParams.id);

	if (!isNumber(sectionId)) {
		notFound();
	}

	const materialSearchParams: MaterialSearchParams = {
		page: resolvedSearchParams?.page ?? 1,
		size: resolvedSearchParams?.size ?? DEFAULT_PAGE_SIZE,
		sort: resolvedSearchParams?.sort ?? MaterialSortField.ID,
		sort_direction: SortDirection.ASC,
		fields: {
			...parseFieldsFromURLSearchParam(resolvedSearchParams?.fields),
			sectionId,
		},
	};

	return (
		<SectionByIdPageContent
			title={metadata.title?.toString() ?? ''}
			id={sectionId}
			searchParams={materialSearchParams}
		/>
	);
}
