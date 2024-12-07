import React, { useState } from 'react';
import Image from 'next/image';

import transformRoleName from '../../../../utils/methods/transformRoleName';

import AvatarImage from '@/assets/avatar.png';
import IsActiveStatus from '@/components/users/manage_page/page_content/IsActiveStatus';
import { UserSearch } from '@/services/user/types';

type UserBlockProps = {
	data: UserSearch;
	children: React.ReactNode;
};

export default function UserListItem({ data: user, children }: UserBlockProps) {
	const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);

	const handleOpenDetails = () => {
		setIsOpenDetails((prevState) => !prevState);
	};

	return (
		<div>
			<div
				className="relative shrink-0 cursor-pointer rounded-2xl border-2 border-primary bg-bg px-6 py-4 shadow-md"
				onClick={handleOpenDetails}
			>
				<div className="flex w-full items-center justify-between text-sm">
					<IsActiveStatus isActive={user.isEnabled} />
					<div className="">{user.createdDate.toString().split('T')[0]}</div>
				</div>
				<div className="flex w-full justify-between gap-6 py-3">
					<div>
						<Image
							src={user.photo ?? AvatarImage.src}
							alt={`Avatar użytkownika ${user.username}`}
							className="aspect-square rounded-full"
							width="65"
							height="65"
						/>
					</div>
					<div className="flex-1">
						<h3 className="text-lg font-semibold text-primary">
							{user.id}: {user.username}
						</h3>
						<div className="pt-1">{transformRoleName(user.role.name)}</div>
						<div className="flex items-center pt-1"></div>
					</div>
				</div>
			</div>
			{isOpenDetails && <div className="px-3">{children}</div>}
		</div>
	);
}
