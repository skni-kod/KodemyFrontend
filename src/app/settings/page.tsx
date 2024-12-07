import React from 'react';
import { Metadata } from 'next';

import SettingsPageContent from '@/components/settings/SettingsPageContent';
import { PAGE_TITLE } from '@/utils/constant';

export const metadata: Metadata = {
	title: PAGE_TITLE.SETTINGS,
};

export default function AuthPage() {
	return <SettingsPageContent />;
}
