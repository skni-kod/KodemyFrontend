import { Metadata } from 'next';
import HomePageContent from '@/components/home/HomePageContent';
import { PAGE_TITLE } from '@/utils/constant';

export const metadata: Metadata = {
	title: PAGE_TITLE.HOME,
};

export default function Home() {
	return <HomePageContent />;
}
