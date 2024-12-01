'use client';
import React, { useEffect } from 'react';
import MetadataProps from '@/utils/types/page/metadataProps';
import PageContent from '@/components/layout/PageContent';
import UserDetailsSection from '@/components/users/by_id_page/page_content/UserDetailsSection';
import UserSessionSection from '@/components/users/by_id_page/page_content/UserSessionSection';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import UserService from '@/services/user/userService';
import { User } from '@/services/user/types';
import { useSessionContext } from '@/contexts/SessionContext';
import UserMaterialsSection from '@/components/users/by_id_page/page_content/UserMaterialsSection';

export default function UserByIdPageContent({ id: userId, title }: MetadataProps & { id: number }) {
	const { data: user, status, fetch: fetchUser } = useFetchState<User>();
	const { session, isSessionLoading } = useSessionContext();

	useEffect(() => {
		!isSessionLoading && fetchUser(() => UserService.getUserById(session, userId));
	}, [fetchUser, session, isSessionLoading, userId]);

	if (status === Status.PENDING) return <Loading full />;

	return (
		<PageContent headerValue={title}>
			{status === Status.ERROR || !user ? (
				<Error container />
			) : (
				<div className="space-y-12">
					<UserDetailsSection user={user} />
					<UserSessionSection user={user} />
					<UserMaterialsSection user={user} />
				</div>
			)}
		</PageContent>
	);
}
