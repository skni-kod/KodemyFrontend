import React from 'react';
import { Metadata } from 'next';

import DevToolsPageContent from '@/components/dev-tools/DevToolsPageContent';
import { PAGE_TITLE } from '@/utils/constant';

export const metadata: Metadata = {
	title: PAGE_TITLE.DEV_TOOLS,
};

export default function DevToolsPage() {
	return <DevToolsPageContent />;
}
