import React from 'react';
import { Metadata } from 'next';
import MaterialManagePageContent from '@/components/materials/manage_page/MaterialManagePageContent';
import { MaterialSearchParams, SearchParams } from '@/utils/types';
import PageQueryProps from '@/utils/types/page/pageQueryProps';
import { DEFAULT_MATERIAL_PAGE_SORT, DEFAULT_PAGE_SIZE, PAGE_TITLE } from '@/utils/constant';
import { parseFieldsFromURLSearchParam } from '@/utils/methods';

export const metadata: Metadata = {
	title: PAGE_TITLE.MATERIALS_MANAGE,
};

export default function MaterialsManagePage({ searchParams }: PageQueryProps<SearchParams<string>>) {
	const materialSearchParams: MaterialSearchParams = {
		page: searchParams?.page ?? 1,
		size: searchParams?.size ?? DEFAULT_PAGE_SIZE,
		sort: searchParams?.sort ?? DEFAULT_MATERIAL_PAGE_SORT,
		fields: parseFieldsFromURLSearchParam(searchParams?.fields),
	};

	return <MaterialManagePageContent title={metadata.title?.toString() ?? ''} searchParams={materialSearchParams} />;
}
