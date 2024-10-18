import Image from 'next/image';
import clsx from 'clsx';
import { Section } from '@/services/section/types';
import { sidebarSections } from '@/components/layout/Sidebar';
import React from 'react';

type SectionSelectProps = {
	sections: Section[];
	selected?: number;
	onClick: (id: number) => void;
};

export default function SectionSelect({ sections, selected, onClick }: SectionSelectProps) {
	return (
		<ul className="flex w-full list-none flex-col items-center gap-4">
			{sections.map(({ id, name }) => (
				<li
					key={id}
					className={clsx(
						'flex w-full items-center gap-2 rounded-xl border-2 bg-bg px-3 py-2',
						selected !== id ? 'cursor-pointer hover:bg-bgHover' : 'border-primary text-primary',
					)}
					onClick={() => onClick(id)}
				>
					<div className="flex aspect-square w-18 items-center justify-center">
						<Image
							src={sidebarSections.find(({ id: sectionId }) => id === sectionId)?.icon.light ?? ''}
							width={24}
							height={24}
							alt={name}
							style={{
								width: 'auto',
								height: 'auto',
							}}
						/>
					</div>
					<span className="text-xl font-normal">{name}</span>
				</li>
			))}
		</ul>
	);
}
