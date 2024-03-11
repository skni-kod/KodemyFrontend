import { Section } from '@/hooks/services/useSectionService';
import getIconAsset from '@/components/layout/sidebar/helper/SidebarAssets';
import Image from 'next/image';
import { useThemeStore } from '@/store/themeSlice';
import clsx from 'clsx';

type SectionSelectProps = {
	sections: Section[];
	selected?: number;
	onClick: (id: number) => void;
};

export default function SectionSelect({ sections, selected, onClick }: SectionSelectProps) {
	const { themeMode } = useThemeStore();

	return (
		<ul className="flex flex-col items-center gap-4 w-full list-none">
			{sections.map(({ id, name }) => (
				<li
					key={id}
					className={clsx(
						'flex items-center gap-4 w-full px-6 py-4 border-2 rounded-xl',
						selected !== id
							? 'border-overlay2bg hover:bg-overlay2bg cursor-pointer'
							: 'border-primary text-primary',
					)}
					onClick={() => onClick(id)}
				>
					<div className="flex justify-center items-center w-18 aspect-square">
						<Image
							width={72}
							height={72}
							src={getIconAsset(id, themeMode)}
							alt={name}
							priority={true}
						/>
					</div>
					<span className="text-xl font-normal">{name}</span>
				</li>
			))}
		</ul>
	);
}
