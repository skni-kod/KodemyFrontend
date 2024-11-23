import React from 'react';
import { Metadata } from 'next';
import { PAGE_TITLE } from '@/utils/constant';
import LogoutPageContent from '@/components/auth/logout/LogoutPageContent';

export const metadata: Metadata = {
	title: PAGE_TITLE.SIGN_OUT,
};

export default function AuthPage() {
	return <LogoutPageContent />;
}
