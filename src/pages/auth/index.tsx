import Page from '@/components/layout/Page';
import KodemyLogo from '@/components/layout/navbar/left/KodemyLogo';
import SkniKodLogo from '@/components/layout/navbar/left/SkniKodLogo';
import AuthProvidersBtns from '@/components/auth/AuthProvidersBtns';
import { useAuthStore } from '@/store/authSlice';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { generateTitle } from '../_app';

export default function Auth() {
	const { user } = useAuthStore();
	const router = useRouter();

	if (user) router.push('/');

	return (
		<Page>
			<Head>
				<title>{generateTitle("Logowanie")}</title>
			</Head>
			<div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
				<div className="flex justify-center h-12 mt-6">
					<KodemyLogo />
				</div>
				<div className="flex flex-col items-center justify-center mt-20 py-10 px-2 bg-overlay2bg border-text2secondary border rounded-xl w-11/12 2xs:w-4/5 xs:w-2/3 md:w-1/2 shadow-bottomShadow">
					<h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center pb-2 border-0 md:border-b-2 border-text2secondary">Zaloguj się lub stwórz konto</h1>
					<div className="px-7 pt-7">
						<AuthProvidersBtns />
					</div>
				</div>
				<div className="flex justify-center py-10">
					<SkniKodLogo ratio={0.1}/>
				</div>
			</div>
		</Page>
	);
}
