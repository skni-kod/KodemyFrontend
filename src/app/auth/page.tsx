import React from 'react';
import { Metadata } from 'next';

import AuthPageContent from '@/components/auth/AuthPageContent';
import { PAGE_TITLE } from '@/utils/constant';

export const metadata: Metadata = {
	title: PAGE_TITLE.SIGN_IN,
};

export default function AuthPage() {
	return <AuthPageContent />;
}
