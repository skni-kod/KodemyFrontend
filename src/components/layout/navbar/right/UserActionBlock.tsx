'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

import UserActionBtns from '@/components/layout/navbar/right/UserActionBtns';
import { useSessionContext } from '@/contexts/SessionContext';
import { TEXT } from '@/utils/constant';

export default function UserActionBlock() {
	const sessionContext = useSessionContext();
	const router = useRouter();

	return (
		<>
			{sessionContext.sessionStatus === 'UNAUTHENTICATED' && (
				<div className="pr-2">
					<button
						className="flex h-[2.5rem] cursor-pointer items-center text-nowrap rounded-md bg-primary px-4 py-2 text-sm font-semibold text-textOnPrimary hover:bg-primaryHover"
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
