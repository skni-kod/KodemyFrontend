import React from 'react';
import { Metadata } from 'next';
import { MaterialSearchParams, SearchParams } from '@/utils/types';
import { doIf, isNumber, parseFieldsFromURLSearchParam } from '@/utils/methods';
import { notFound } from 'next/navigation';
import MaterialsByUserIdPageContent from '@/components/materials/by_user_page/MaterialsByUserIdPageContent';
import PageQueryProps from '@/utils/types/page/pageQueryProps';
import { DEFAULT_PAGE_SIZE, PAGE_TITLE } from '@/utils/constant';
import { MaterialSortField } from '@/services/material/types';
import { SortDirection } from '@/utils/api/types';

export const metadata: Metadata = {
	title: PAGE_TITLE.MATERIAL_BY_USER,
};

export default async function MaterialsByUserIdPage({
	params: { id },
	searchParams,
}: PageQueryProps<SearchParams<string>> & { params: { id: string } }) {
	const resolvedSearchParams = await searchParams;

	doIf(!isNumber(id), () => notFound());

	const materialSearchParams: MaterialSearchParams = {
		page: resolvedSearchParams?.page ?? 1,
		size: resolvedSearchParams?.size ?? DEFAULT_PAGE_SIZE,
		sort: resolvedSearchParams?.sort ?? MaterialSortField.ID,
		sort_direction: SortDirection.ASC,
		fields: parseFieldsFromURLSearchParam(resolvedSearchParams?.fields),
	};

	return (
		<MaterialsByUserIdPageContent
			title={metadata.title?.toString() ?? ''}
			id={Number(id)}
			searchParams={materialSearchParams}
		/>
	);
}
