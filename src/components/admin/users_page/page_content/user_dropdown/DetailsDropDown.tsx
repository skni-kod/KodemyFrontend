import React, { useState } from 'react';
import clsx from 'clsx';

enum DetailsMode {
	MANAGE,
	SESSIONS,
	OVERVIEW
}

const menu: { name: string; mode: DetailsMode; clickable: boolean }[] = [
	{ name: 'Zarządzaj', mode: DetailsMode.MANAGE, clickable: false },
	{ name: 'Sesje', mode: DetailsMode.SESSIONS, clickable: false },
	{ name: 'Przegląd', mode: DetailsMode.OVERVIEW, clickable: false },
];

export default function DetailsDropDown({ id }: { id: number }) {
	const [openMode, setOpenMode] = useState<DetailsMode>(DetailsMode.MANAGE);

	const handleMode = (mode: DetailsMode) => setOpenMode(mode);

	if (isNaN(id) || id <= 0) return null;

	return (
		<div className="border shadow-md">
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
		</div>
	);
}
