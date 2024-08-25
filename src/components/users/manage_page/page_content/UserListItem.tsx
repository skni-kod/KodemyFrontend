import Image from 'next/image';
import React, { useState } from 'react';
import { User } from '@/services/user/types';
import IsActiveStatus from '@/components/users/manage_page/page_content/IsActiveStatus';

type UserBlockProps = {
	data: User;
	children: React.ReactNode;
};

const mapUserRole = (role: string) => role.substring(role.indexOf('_') + 1);

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
					<IsActiveStatus isActive={Math.floor(Math.random() * 2) % 2 === 0} />
					<div className="">{user.createdDate.split('T')[0]}</div>
				</div>
				<div className="flex w-full justify-between gap-6 py-3">
					<div>
						<Image
							src={user.photo}
							alt={`Avatar użytkownika ${user.username}`}
							className="aspect-square"
							width="65"
							height="65"
						/>
					</div>
					<div className="flex-1">
						<h3 className="text-lg font-semibold text-primary">
							{user.id}: {user.username}
						</h3>
						<div className="pt-1">{mapUserRole(user.role.name)}</div>
						<div className="flex items-center pt-1">{user.email}</div>
					</div>
				</div>
			</div>
			{isOpenDetails && <div className="px-3">{children}</div>}
		</div>
	);
}
