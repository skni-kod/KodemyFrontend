import React, { useState } from 'react';
import clsx from 'clsx';
import DetailsModePreview from '@/components/materials/section_page/page_content/material_dropdown/mode/DetailsModePreview';
import DetailsModeGrades from '@/components/materials/section_page/page_content/material_dropdown/mode/DetailsModeGrades';

enum DetailsMode {
	OVERVIEW,
	GRADES,
	MANAGE,
	HISTORY,
}

const menu: { name: string; mode: DetailsMode; clickable: boolean }[] = [
	{ name: 'Przegląd', mode: DetailsMode.OVERVIEW, clickable: true },
	{ name: 'Oceny', mode: DetailsMode.GRADES, clickable: true },
	{ name: 'Zarządzaj', mode: DetailsMode.MANAGE, clickable: false },
	{ name: 'Historia', mode: DetailsMode.HISTORY, clickable: false },
];

export default function ManageDetailsDropDown({ id }: { id: number }) {
	const [openMode, setOpenMode] = useState<DetailsMode>(DetailsMode.OVERVIEW);

	const handleMode = (mode: DetailsMode) => setOpenMode(mode);

	if (isNaN(id) || id <= 0) return null;

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
			{openMode === DetailsMode.OVERVIEW && <DetailsModePreview id={id} />}
			{openMode === DetailsMode.GRADES && <DetailsModeGrades id={id} />}
		</div>
	);
}
