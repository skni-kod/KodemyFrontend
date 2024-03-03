import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import DetailsModePreview from '@/components/materials/section_page/page_content/material_dropdown/mode/DetailsModePreview';
import DetailsModeGrades from '@/components/materials/section_page/page_content/material_dropdown/mode/DetailsModeGrades';

enum DetailsMode {
	OVERVIEW,
	GRADES,
}

const menu: { name: string; mode: DetailsMode; clickable: boolean }[] = [
	{ mode: DetailsMode.OVERVIEW, name: 'Przegląd', clickable: true },
	{ mode: DetailsMode.GRADES, name: 'Oceny', clickable: false },
];

export default function DetailsDropDown({ id }: { id: number }) {
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
		</div>
	);
}
