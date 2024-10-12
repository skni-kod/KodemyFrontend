import React from 'react';
import PageContent from '@/components/layout/PageContent';
import KodemyLogo from '@/components/layout/navbar/left/KodemyLogo';
import SkniKodLogo from '@/components/auth/SkniKodLogo';
import AuthProvidersBtns from '@/components/auth/AuthProvidersBtns';
import { TEXT } from '@/utils/constant';

export default function AuthPageContent() {
	return (
		<PageContent noHeader>
			<div className="mx-auto flex w-full max-w-lg flex-col justify-center pt-4">
				<KodemyLogo className="mx-auto h-14" />
				<div className="mx-auto flex w-11/12 flex-col items-center justify-center py-8">
					<h1 className="border-0 border-textOnSecondary pb-2 text-center text-xl font-semibold md:border-b-2 md:text-2xl lg:text-3xl">
						{TEXT.AUTH.SIGN_IN_OR_UP}
					</h1>
					<div className="px-7 pt-7">
						<AuthProvidersBtns />
					</div>
				</div>
				<SkniKodLogo className="mx-auto h-14" />
			</div>
		</PageContent>
	);
}
