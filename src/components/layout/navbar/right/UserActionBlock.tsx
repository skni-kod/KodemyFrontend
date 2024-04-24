'use client';
import { SessionStatus, useSessionContext } from '@/contexts/SessionContext';
import React, { useEffect, useState } from 'react';
import Button from '@/components/common/Button';
import { TEXT } from '@/utils/constant';
import { useRouter } from 'next/navigation';
import UserActionBtns from '@/components/layout/navbar/right/UserActionBtns';

export default function UserActionBlock() {
	const { session, status } = useSessionContext();
	const [stateStatus, setStateStatus] = useState(status);
	const router = useRouter();

	useEffect(() => {
		setStateStatus(status);
	}, [status]);

	return (
		<>
			{SessionStatus.UNAUTHENTICATED === stateStatus && (
				<div className="pr-2">
					<button
						className="flex h-[2.5rem] cursor-pointer items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-textOnPrimary hover:bg-primaryHover"
						onClick={() => router.push('/auth')}
					>
						{TEXT.SIGN_IN}
					</button>
				</div>
			)}

			{SessionStatus.AUTHENTICATED === stateStatus && <UserActionBtns />}
		</>
	);
}
