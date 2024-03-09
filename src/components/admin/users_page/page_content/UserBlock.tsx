import Image from 'next/image';
import React, { useState } from 'react';
import { User } from '@/hooks/services/useUserService';
import IsActiveStatus from '@/components/admin/users_page/page_content/IsActiveStatus';

type UserBlockProps = {
	data: User;
	children: React.ReactNode;
};

const mapUserRole = (role: string) => role.substring(role.indexOf('_') + 1);

export default function UserBlock({ data: user, children }: UserBlockProps) {
	const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);

	const handleOpenDetails = () => {
		setIsOpenDetails((prevState) => !prevState);
	};

	return (
		<div>
			<div
				className="relative py-4 px-6 bg-bg border-2 border-primary rounded-2xl shrink-0 shadow-md cursor-pointer"
				onClick={handleOpenDetails}
			>
				<div className="flex justify-between items-center w-full text-sm">
					<IsActiveStatus isActive={Math.floor(Math.random() * 2) % 2 === 0} />
					<div className="text-placeholder2bg">{user.createdDate.split('T')[0]}</div>
				</div>
				<div className="flex justify-between gap-6 w-full py-3">
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
						<div className="flex items-center pt-1 text-placeholder2bg">{user.email}</div>
					</div>
				</div>
			</div>
			{isOpenDetails && <div className="px-3">{children}</div>}
		</div>
	);
}
