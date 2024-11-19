import React from 'react';
import { Metadata } from 'next';
import { PAGE_TITLE } from '@/utils/constant';
import SettingsPageContent from '@/components/settings/SettingsPageContent';

export const metadata: Metadata = {
	title: PAGE_TITLE.SETTINGS,
};

export default function AuthPage() {
	return <SettingsPageContent />;
}
