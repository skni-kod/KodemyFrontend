import { useSidebarContext } from '@/contexts/SidebarStateContext';
import { useCallback, useEffect } from 'react';
import useSectionService from '@/hooks/services/useSectionService';
import { useThemeStore } from '@/store/themeSlice';
import getIconAsset from '@/components/layout/sidebar/helper/SidebarAssets';
import { AiOutlineRight } from 'react-icons/ai';
import Image from 'next/image';
import Link from 'next/link';

export default function SidebarMenu() {
	const { themeMode } = useThemeStore();
	const { menuData, setMenuData, isOpen } = useSidebarContext();
	const { getSections } = useSectionService();

	const handleInitSection = useCallback(() => {
		getSections().then((data) => setMenuData(data || []));
	}, [getSections, setMenuData]);

	useEffect(() => {
		!menuData && handleInitSection();
	}, [handleInitSection, menuData]);

	return (
		<nav className="flex-1">
			<ul className="flex flex-col items-center gap-1 w-full py-2 px-0 list-none">
				{menuData &&
					menuData.map((section, idx) => (
						<li key={idx} className="w-full">
							<Link
								href={`/sections/${section.id}`}
								className="flex justify-between items-center gap-4 w-full px-4 py-2 text-none cursor-pointer"
							>
								<div>
									<Image
										className="w-7 h-7"
										src={getIconAsset(section.id, themeMode)}
										width={24}
										height={24}
										alt={section.name}
									/>
								</div>
								{isOpen && (
									<div className="flex-1 whitespace-nowrap overflow-hidden">{section.name}</div>
								)}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	);
}
