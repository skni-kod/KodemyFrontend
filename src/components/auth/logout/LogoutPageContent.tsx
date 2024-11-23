'use client';
import React, { useEffect } from 'react';
import PageContent from '@/components/layout/PageContent';
import KodemyLogo from '@/components/layout/navbar/left/KodemyLogo';
import SkniKodLogo from '@/components/auth/SkniKodLogo';
import { useRouter } from 'next/navigation';
import AuthService from '@/services/auth/authService';
import { useSessionContext } from '@/contexts/SessionContext';
import { useToast } from '@/contexts/ToastContext';

export default function LogoutPageContent() {
	const router = useRouter();
	const { session } = useSessionContext();
	const { addToast } = useToast();

	useEffect(() => {
		try {
			if (!session || !session.token?.bearer) {
				console.error('No session or Bearer token found');
				return;
			}

			AuthService.logout(session.token.bearer);

			addToast(`Wylogowano poprawnie`, 'success', 5000);
			//router.replace('/');
		} catch (error) {
			addToast(`Błąd podczas wylogowania:`, 'danger', 5000);
			console.error('Błąd podczas wylogowania:', error);
		}
	}, []);

	return (
		<PageContent noHeader>
			<div className="mx-auto flex w-full max-w-lg flex-col justify-center pt-4">
				<KodemyLogo className="mx-auto h-14" />
				<div className="mx-auto flex w-11/12 flex-col items-center justify-center py-8">
					<h1 className="border-0 border-textOnSecondary pb-2 text-center text-xl font-semibold md:border-b-2 md:text-2xl lg:text-3xl">
						Zaraz nastąpi wylogowanie
					</h1>
				</div>
				<SkniKodLogo className="mx-auto h-14" />
			</div>
		</PageContent>
	);
}
