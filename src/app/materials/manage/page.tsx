import React from 'react';
import { Metadata } from 'next';

import MaterialManagePageContent from '@/components/materials/manage_page/MaterialManagePageContent';
import { SortDirection } from '@/utils/api/types';
import { DEFAULT_MATERIAL_PAGE_SORT, DEFAULT_PAGE_SIZE, PAGE_TITLE } from '@/utils/constant';
import { parseFieldsFromURLSearchParam } from '@/utils/methods';
import { MaterialSearchParams, SearchParams } from '@/utils/types';
import PageQueryProps from '@/utils/types/page/pageQueryProps';

export const metadata: Metadata = {
	title: PAGE_TITLE.MATERIALS_MANAGE,
};

export default async function MaterialsManagePage({ searchParams }: PageQueryProps<SearchParams<string>>) {
	const resolvedSearchParams = await searchParams;

	const materialSearchParams: MaterialSearchParams = {
		page: resolvedSearchParams?.page ?? 1,
		size: resolvedSearchParams?.size ?? DEFAULT_PAGE_SIZE,
		sort: resolvedSearchParams?.sort ?? DEFAULT_MATERIAL_PAGE_SORT,
		sort_direction: SortDirection.ASC,
		fields: parseFieldsFromURLSearchParam(resolvedSearchParams?.fields),
	};

	return <MaterialManagePageContent title={metadata.title?.toString() ?? ''} searchParams={materialSearchParams} />;
}
