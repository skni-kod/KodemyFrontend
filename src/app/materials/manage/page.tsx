import React from 'react';
import { Metadata } from 'next';
import MaterialManagePageContent from '@/components/materials/manage_page/MaterialManagePageContent';
import { MaterialSearchParams } from '@/utils/types';
import PageQueryProps from '@/utils/types/page/pageQueryProps';
import { PAGE_TITLE } from '@/utils/constant';

export const metadata: Metadata = {
	title: PAGE_TITLE.MATERIALS_MANAGE,
};

export default function MaterialsManagePage({ searchParams }: PageQueryProps<MaterialSearchParams>) {
	return <MaterialManagePageContent title={metadata.title?.toString() ?? ''} searchParams={searchParams ?? {}} />;
}
