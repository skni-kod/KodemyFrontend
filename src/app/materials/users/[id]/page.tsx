import React from 'react';
import { Metadata } from 'next';
import { MaterialSearchParams } from '@/utils/types';
import { doIf, isNumber } from '@/utils/methods';
import { notFound } from 'next/navigation';
import MaterialsByUserIdPageContent from '@/components/materials/by_user_page/MaterialsByUserIdPageContent';
import PageQueryProps from '@/utils/types/page/pageQueryProps';
import { PAGE_TITLE } from '@/utils/constant';

export const metadata: Metadata = {
	title: PAGE_TITLE.MATERIAL_BY_USER,
};

export default function MaterialsByUserIdPage({
	params: { id },
	searchParams,
}: PageQueryProps<MaterialSearchParams> & { params: { id: string } }) {
	doIf(!isNumber(id), () => notFound());

	return (
		<MaterialsByUserIdPageContent
			title={metadata.title?.toString() ?? ''}
			id={Number(id)}
			searchParams={searchParams ?? {}}
		/>
	);
}
