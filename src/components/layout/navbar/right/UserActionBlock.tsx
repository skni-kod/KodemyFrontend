'use client';
import { useSessionContext } from '@/contexts/SessionContext';
import React, { useEffect, useState } from 'react';
import { TEXT } from '@/utils/constant';
import { useRouter } from 'next/navigation';
import UserActionBtns from '@/components/layout/navbar/right/UserActionBtns';

export default function UserActionBlock() {
	const { session, sessionStatus } = useSessionContext();
	const [stateStatus, setStateStatus] = useState(sessionStatus);
	const router = useRouter();

	useEffect(() => {
		setStateStatus(sessionStatus);
	}, [sessionStatus]);

	return (
		<>
			{stateStatus === 'UNAUTHENTICATED' && (
				<div className="pr-2">
					<button
						className="flex h-[2.5rem] cursor-pointer items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-textOnPrimary hover:bg-primaryHover"
						onClick={() => router.push('/auth')}
					>
						{TEXT.SIGN_IN}
					</button>
				</div>
			)}

			{stateStatus === 'AUTHENTICATED' && <UserActionBtns />}
		</>
	);
}