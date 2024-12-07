'use client';
import React, { useState } from 'react';
import clsx from 'clsx';

import DetailsModeHistory from '@/components/materials/manage_page/page_content/material_dropdown/mode/DetailsModeHistory';
import DetailsModeManage from '@/components/materials/manage_page/page_content/material_dropdown/mode/DetailsModeManage';
import DetailsModeGrades from '@/components/materials/section_by_id_page/page_content/material_dropdown/mode/DetailsModeGrades';
import DetailsModePreview from '@/components/materials/section_by_id_page/page_content/material_dropdown/mode/DetailsModePreview';

enum DetailsMode {
	OVERVIEW,
	GRADES,
	MANAGE,
	HISTORY,
}

const menu: { name: string; mode: DetailsMode; clickable: boolean }[] = [
	{ name: 'Przegląd', mode: DetailsMode.OVERVIEW, clickable: true },
	{ name: 'Oceny', mode: DetailsMode.GRADES, clickable: true },
	{ name: 'Zarządzaj', mode: DetailsMode.MANAGE, clickable: true },
	{ name: 'Historia', mode: DetailsMode.HISTORY, clickable: true },
];

export default function ManageDetailsDropDown({ id }: { id: number }) {
	const [openMode, setOpenMode] = useState<DetailsMode>(DetailsMode.OVERVIEW);

	const handleMode = (mode: DetailsMode) => setOpenMode(mode);

	if (isNaN(id) || id <= 0) return null;

	return (
		<div className="border-2 shadow-md">
			<div className="flex w-full items-center justify-center border-b">
				{menu.map(({ name, mode, clickable }, index) => (
					<button
						key={index}
						className={clsx(
							'h-12 px-2',
							clickable ? 'cursor-pointer' : 'cursor-not-allowed',
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
			{openMode === DetailsMode.MANAGE && <DetailsModeManage id={id} />}
			{openMode === DetailsMode.HISTORY && <DetailsModeHistory id={id} />}
		</div>
	);
}
