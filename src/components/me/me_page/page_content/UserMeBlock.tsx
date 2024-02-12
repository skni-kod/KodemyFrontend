import Image from 'next/image';
import React, { useState } from 'react';
import { User } from '@/hooks/services/useUserService';
import { FaCircle } from 'react-icons/fa6';
import clsx from 'clsx';

type UserBlockProps = {
	data: User;
	children: React.ReactNode;
};

export default function UserMeBlock({ data: user, children }: UserBlockProps) {
	const isActive = Math.floor(Math.random() * 2) % 2 === 0;

	return (
		<div>
			<div className="relative py-4 px-6 bg-bg border-2 border-primary rounded-2xl shrink-0 shadow-md cursor-pointer">
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
					<div className="flex-1 flex flex-col justify-center">
						<h3 className="text-lg font-semibold text-primary">{user.username}</h3>
						<div className="flex items-center pt-1 text-placeholder2bg">{user.email}</div>
					</div>
				</div>
			</div>
			<div className="px-3">{children}</div>
		</div>
	);
}
