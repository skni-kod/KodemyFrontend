'use client';
import React, { useEffect } from 'react';

import SkniKodLogo from '@/components/auth/SkniKodLogo';
import KodemyLogo from '@/components/layout/navbar/left/KodemyLogo';
import PageContent from '@/components/layout/PageContent';
import { useSessionContext } from '@/contexts/SessionContext';
import { useToast } from '@/contexts/ToastContext';

export default function LogoutPageContent() {
	const { session } = useSessionContext();
	const { addToast } = useToast();

	useEffect(() => {
		try {
			if (!session) {
				console.error('No session or Bearer token found');
				return;
			}

			addToast(`Wylogowano poprawnie`, 'success', 5000);
		} catch (error) {
			addToast(`Błąd podczas wylogowania:`, 'danger', 5000);
			console.error('Błąd podczas wylogowania:', error);
		}
	}, [addToast, session]);

	return (
		<PageContent noHeader>
			<div className="mx-auto flex w-full max-w-lg flex-col justify-center pt-4">
				<KodemyLogo className="mx-auto h-14" size="big" />
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
