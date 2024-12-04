import React, { useMemo } from 'react';
import { doIf, isNumber, parseFieldsFromURLSearchParam } from '@/utils/methods';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import SectionByIdPageContent from '@/components/materials/section_by_id_page/SectionByIdPageContent';
import { SearchParams } from '@/utils/types';
import PageQueryProps from '@/utils/types/page/pageQueryProps';
import { DEFAULT_PAGE_SIZE, PAGE_TITLE } from '@/utils/constant';
import { MaterialSortField } from '@/services/material/types';
import { SortDirection } from '@/utils/api/types';

export const metadata: Metadata = {
	title: PAGE_TITLE.SECTION_BY_ID,
};

export default function SectionByIdPage({
	params,
	searchParams,
}: PageQueryProps<SearchParams<string>> & {
	params: { id: string };
}) {
	doIf(!isNumber(params.id), () => notFound());

	const materialSearchParams = useMemo(
		() => ({
			page: searchParams?.page ?? 1,
			size: searchParams?.size ?? DEFAULT_PAGE_SIZE,
			sort: searchParams?.sort ?? MaterialSortField.ID,
			sort_direction: SortDirection.ASC,
			fields: {
				...parseFieldsFromURLSearchParam(searchParams?.fields),
				sectionId: Number(params.id),
			},
		}),
		[params.id, searchParams],
	);

	return (
		<SectionByIdPageContent
			title={metadata.title?.toString() ?? ''}
			id={Number(params.id)}
			searchParams={materialSearchParams}
		/>
	);
}
