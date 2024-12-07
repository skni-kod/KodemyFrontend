import React from 'react';
import { Metadata } from 'next';

import LogoutPageContent from '@/components/auth/logout/LogoutPageContent';
import { PAGE_TITLE } from '@/utils/constant';

export const metadata: Metadata = {
	title: PAGE_TITLE.SIGN_OUT,
};

export default function AuthPage() {
	return <LogoutPageContent />;
}
