import { Category, Section } from '@/hooks/services/useSectionService';
import getIconAsset from '@/components/layout/sidebar/helper/SidebarAssets';
import Image from 'next/image';
import { useThemeStore } from '@/store/themeSlice';
import clsx from 'clsx';

type CategorySelectProps = {
	categories: Category[];
	selected?: number;
	onClick: (id: number) => void;
};

export default function CategorySelect({ categories, selected, onClick }: CategorySelectProps) {
	return (
		<ul className="flex flex-col items-center gap-4 w-full list-none">
			{categories.map(({ id, name }) => (
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
					<span className="w-full text-xl font-normal text-center">{name}</span>
				</li>
			))}
		</ul>
	);
}
