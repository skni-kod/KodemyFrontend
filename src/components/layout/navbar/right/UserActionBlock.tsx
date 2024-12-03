'use client';
import { useSessionContext } from '@/contexts/SessionContext';
import React from 'react';
import { TEXT } from '@/utils/constant';
import { useRouter } from 'next/navigation';
import UserActionBtns from '@/components/layout/navbar/right/UserActionBtns';

export default function UserActionBlock() {
	const sessionContext = useSessionContext();
	const router = useRouter();

	return (
		<>
			{sessionContext.sessionStatus === 'UNAUTHENTICATED' && (
				<div className="pr-2">
					<button
						className="flex h-[2.5rem] cursor-pointer items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-textOnPrimary hover:bg-primaryHover"
						onClick={() => router.push('/auth')}
					>
						{TEXT.SIGN_IN}
					</button>
				</div>
			)}

			{sessionContext.sessionStatus === 'AUTHENTICATED' && <UserActionBtns />}
		</>
	);
}
