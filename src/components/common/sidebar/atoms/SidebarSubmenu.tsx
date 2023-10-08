import React from 'react';
import Link from 'next/link';
import { pageCategoryIdRoute } from '@/pages/category/[id]';
import { Section } from '@/hooks/services/useSectionService';

interface SidebarSubmenuProps {
	section: Section;
	isExpandMenu: boolean;
	expandedItemId: number | null;
}

const SidebarSubmenu = ({
	section,
	isExpandMenu,
	expandedItemId,
}: SidebarSubmenuProps) => {
	const isExpandSubmenu = isExpandMenu && expandedItemId === section.id;

	return (
		<>
			{isExpandSubmenu && (
				<ul className="list-none block">
					{section.categories.map(({ id, name }) => (
						<Link
							key={id}
							href={pageCategoryIdRoute(id)}
							className="flex items-center w-full px-3.5 py-1 pl-12 mt-1 rounded-lg no-underline overflow-hidden"
						>
							{name}
						</Link>
					))}
				</ul>
			)}
		</>
	);
};

export default SidebarSubmenu;
