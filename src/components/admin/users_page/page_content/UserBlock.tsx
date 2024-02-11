import { Rating } from 'react-simple-star-rating';
import Image from 'next/image';
import DocumentsImage from '@/assets/material/documents.png';
import React, { useState } from 'react';
import { Material } from '@/hooks/services/useMaterialService';
import { LuDot } from 'react-icons/lu';
import { User } from '@/hooks/services/useUserService';
import { FaCircle } from 'react-icons/fa6';
import clsx from 'clsx';

type UserBlockProps = {
	data: User;
	children: React.ReactNode;
};

export default function UserBlock({ data: user, children }: UserBlockProps) {
	const [isOpenDetails, setIsOpenDetails] = useState<boolean>(false);

	const handleOpenDetails = () => {
		setIsOpenDetails((prevState) => !prevState);
	};

	const isActive = Math.floor(Math.random() * 2) % 2 === 0;

	return (
		<div>
			<div
				className="relative py-4 px-6 bg-bg border-2 border-primary rounded-2xl shrink-0 shadow-md cursor-pointer"
				onClick={handleOpenDetails}
			>
				<div className="flex justify-between items-center w-full text-sm">
					<div
						className={clsx(
							'flex items-center leading-none',
							isActive ? 'text-green-500' : 'text-red-500',
						)}
					>
						<FaCircle />
						&nbsp;{isActive ? 'Aktywny' : 'Nieaktywny'}
					</div>
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
						<div className="pt-1">Rola: {user.role.name}</div>
						<div className="flex items-center pt-1 text-placeholder2bg">{user.email}</div>
					</div>
				</div>
			</div>
			{isOpenDetails && <div className="px-3">{children}</div>}
		</div>
	);
}
