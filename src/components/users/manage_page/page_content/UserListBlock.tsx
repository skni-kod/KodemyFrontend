import React from 'react';
import { UserSearch } from '@/services/user/types';
import UserListItem from '@/components/users/manage_page/page_content/UserListItem';

export default function UserListBlock({
	users,
	DetailsDropDownComponent,
}: {
	users: UserSearch[];
	DetailsDropDownComponent: React.ComponentType<{ id: number }>;
}) {
	return (
		<div className="flex w-full flex-col gap-6 pt-5">
			{users.length > 0 ? (
				<>
					{users.map((user, index) => (
						<UserListItem key={index} data={user}>
							<DetailsDropDownComponent id={user.id} />
						</UserListItem>
					))}
				</>
			) : (
				<div className="w-full pt-2.5 text-center">Nie znaleziono elementów</div>
			)}
		</div>
	);
}
