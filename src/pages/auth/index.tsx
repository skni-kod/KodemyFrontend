import Page from '@/components/layout/Page';
import KodemyLogo from '@/components/layout/navbar/left/KodemyLogo';
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
			<div className="w-full max-w-2xs mx-auto">
				<div className="flex justify-center h-12">
					<KodemyLogo />
				</div>
				<div className="pt-7">
					<h1 className="text-3xl font-semibold text-center">Zaloguj się lub stwórz konto</h1>
					<div className="px-7 pt-7">
						<AuthProvidersBtns />
					</div>
				</div>
			</div>
		</Page>
	);
}
