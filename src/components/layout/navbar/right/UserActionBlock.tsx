'use client';
import { useSessionContext } from '@/contexts/SessionContext';
import React, { useEffect, useState } from 'react';
import { TEXT } from '@/utils/constant';
import { useRouter } from 'next/navigation';
import UserActionBtns from '@/components/layout/navbar/right/UserActionBtns';

export default function UserActionBlock() {
	const { session, isSessionLoading } = useSessionContext();
	const [state, setState] = useState<number>(() => {
		return isSessionLoading ? 0 : (session != undefined ? 1 : -1);
	});
	const router = useRouter();

	useEffect(() => {
		setState(isSessionLoading ? 0 : (session != undefined ? 1 : -1));
	}, [session, isSessionLoading]);

	return (
		<>
			{state == -1 && (
				<div className="pr-2">
					<button
						className="flex h-[2.5rem] cursor-pointer items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-textOnPrimary hover:bg-primaryHover"
						onClick={() => router.push('/auth')}
					>
						{TEXT.SIGN_IN}
					</button>
				</div>
			)}

			{state == 1 && <UserActionBtns />}
		</>
	);
}
