import React from 'react';
import { doIf, isNumber, parseFieldsFromURLSearchParam } from '@/utils/methods';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import SectionByIdPageContent from '@/components/materials/section_by_id_page/SectionByIdPageContent';
import { SearchParams } from '@/utils/types';
import PageQueryProps from '@/utils/types/page/pageQueryProps';
import { PAGE_TITLE } from '@/utils/constant';

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

	return (
		<SectionByIdPageContent
			title={metadata.title?.toString() ?? ''}
			id={Number(params.id)}
			searchParams={parseFieldsFromURLSearchParam(searchParams?.fields ?? '')}
		/>
	);
}
