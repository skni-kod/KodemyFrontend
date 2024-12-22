import { Metadata } from 'next';

import HomePageContent from '@/components/home/HomePageContent';
import { PAGE_TITLE } from '@/utils/constant';
import PageQueryProps from '@/utils/types/page/pageQueryProps';

export const metadata: Metadata = {
	title: PAGE_TITLE.HOME,
};

export default async function Home({ searchParams }: PageQueryProps<{ logout: string }>) {
	return <HomePageContent searchParams={await searchParams} />;
}
