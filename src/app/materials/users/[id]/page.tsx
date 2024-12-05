import React from 'react';
import { Metadata } from 'next';
import { MaterialSearchParams, SearchParams } from '@/utils/types';
import { doIf, isNumber, parseFieldsFromURLSearchParam } from '@/utils/methods';
import { notFound } from 'next/navigation';
import MaterialsByUserIdPageContent from '@/components/materials/by_user_page/MaterialsByUserIdPageContent';
import PageQueryProps from '@/utils/types/page/pageQueryProps';
import { DEFAULT_MATERIAL_PAGE_SORT, DEFAULT_PAGE_SIZE, PAGE_TITLE } from '@/utils/constant';

export const metadata: Metadata = {
	title: PAGE_TITLE.MATERIAL_BY_USER,
};

export default function MaterialsByUserIdPage({
	params: { id },
	searchParams,
}: PageQueryProps<SearchParams<string>> & { params: { id: string } }) {
	doIf(!isNumber(id), () => notFound());
	const materialSearchParams: MaterialSearchParams = {
		page: searchParams?.page ?? 1,
		size: searchParams?.size ?? DEFAULT_PAGE_SIZE,
		sort: searchParams?.sort ?? DEFAULT_MATERIAL_PAGE_SORT,
		fields: parseFieldsFromURLSearchParam(searchParams?.fields),
	};

	return (
		<MaterialsByUserIdPageContent
			title={metadata.title?.toString() ?? ''}
			id={Number(id)}
			searchParams={materialSearchParams}
		/>
	);
}
