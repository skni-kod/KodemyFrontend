import React, { useState } from 'react';
import clsx from 'clsx';
import { User } from '@/hooks/services/useUserService';
import DetailsModeAccount from '@/components/me/me_page/page_content/user_dropdown/mode/DetailsModeAccount';

enum DetailsMode {
	ACCOUNT,
	SESSIONS,
}

const menu: { name: string; mode: DetailsMode; clickable: boolean }[] = [
	{ name: 'Konto', mode: DetailsMode.ACCOUNT, clickable: true },
	{ name: 'Sesje', mode: DetailsMode.SESSIONS, clickable: false },
];

export default function DetailsDropDown({ data }: { data: User }) {
	const [openMode, setOpenMode] = useState<DetailsMode>(DetailsMode.ACCOUNT);

	const handleMode = (mode: DetailsMode) => setOpenMode(mode);

	if (!data) return null;

	return (
		<div className="border border-2 shadow-md">
			<div className="flex items-center justify-center w-full border-b">
				{menu.map(({ name, mode, clickable }, index) => (
					<button
						key={index}
						className={clsx(
							'h-12 px-2',
							clickable ? 'cursor-pointer' : 'cursor-not-allowed text-placeholder2bg',
							openMode === mode && 'text-primary',
						)}
						onClick={() => clickable && handleMode(mode)}
					>
						{name}
					</button>
				))}
			</div>
			{openMode === DetailsMode.ACCOUNT && <DetailsModeAccount data={data} />}
		</div>
	);
}
