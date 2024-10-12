'use client';
import React from 'react';
import MetadataProps from '@/utils/types/page/metadataProps';
import PageContent from '@/components/layout/PageContent';
import UserDetailsSection from '@/components/users/by_id_page/page_content/UserDetailsSection';
import UserSessionSection from '@/components/users/by_id_page/page_content/UserSessionSection';

export default function UserByIdPageContent({id: userId, title}: MetadataProps & {id: number}) {

	interface UserData {
		id: string;
		username: string;
		email: string | null;
		createdDate: string;
		photo: string;
		role: {
			name: string;
		};
	}

	const userData: UserData = {
		id: '1',
		username: 'u',
		email: 'e',
		createdDate: '2019-02-02',
		photo: '',
		role: {
			name: 'ROLE_USER',
		}
	};

	return (
		<PageContent headerValue={title}>
			<div className="text-black2white">
				<div className="px-0 md:px-[1vw]">
					<h2 className="w-full mt-4 text-semibold text-[5vw] md:text-[36px] pb-4">Profil</h2>
				</div>
				<div className="space-y-12">
					<UserDetailsSection userData={userData} />
					<UserSessionSection userData={userData} />
				</div>
			</div>
		</PageContent>
	);
}