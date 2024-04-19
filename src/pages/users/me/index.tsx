import Page from '@/components/layout/Page';
import { useEffect, useState } from 'react';
import { User } from '@/hooks/services/useUserService';
import { getUsers } from '@/mocks/authService';
import UserMeBlock from '@/components/me/me_page/page_content/UserMeBlock';
import DetailsDropDown from '@/components/me/me_page/page_content/user_dropdown/DetailsDropDown';
import Head from 'next/head';
import { generateTitle } from '@/pages/_app';

export default function UsersMe() {
	const [user, setUser] = useState<User | null>(null);

	useEffect(() => {
		setUser(getUsers().content[0]);
	}, []);

	if (!user) return null;

	return (
		<Page>
			<Head>
				<title>{generateTitle("Twoje konto")}</title>
			</Head>
			<div>
				<h2 className="w-full text-4xl text-semibold">Twoje konto</h2>
				<div className="py-2">
					<div className="flex flex-col gap-6 w-full pt-5">
						<UserMeBlock data={user}>
							<DetailsDropDown data={user} />
						</UserMeBlock>
					</div>
				</div>
			</div>
		</Page>
	);
}
