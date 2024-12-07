import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import UserByIdPageContent from '@/components/users/by_id_page/UserByIdPageContent';
import { doIf, isNumber } from '@/utils/methods';
import PageQueryProps from '@/utils/types/page/pageQueryProps';

export const metadata: Metadata = {
	title: 'Konto użytkownika',
};

export default function UserByIdPage({
	params,
}: PageQueryProps<any> & {
	params: { id: string };
}) {
	doIf(!isNumber(params.id), () => notFound());

	return <UserByIdPageContent title={metadata.title?.toString() ?? ''} id={Number(params.id)} />;
}
