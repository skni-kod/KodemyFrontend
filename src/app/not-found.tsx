import NotFoundPageContent from '@/components/not-found/NoFoundContent';
import { Metadata } from 'next';
import { PAGE_TITLE } from '@/utils/constant';

export const metadata: Metadata = {
	title: PAGE_TITLE.NOT_FOUND,
};

export default function NotFoundPage() {
	return <NotFoundPageContent />;
}
