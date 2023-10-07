import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { pageCategoryIdRoute } from '@/pages/category/[id]';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';
import SidebarItemImage from '../atoms/SidebarItemImage';
import SidebarItemText from '../atoms/SidebarItemText';
import { Section } from '@/hooks/services/useSectionService';

interface SidebarItemProps {
	section: Section;
	isExpandMenu: boolean;
	expandedItemId: number | null;
	setExpandedItemId: (id: number | null) => void;
}

const SidebarItem = ({
	section,
	isExpandMenu,
	expandedItemId,
	setExpandedItemId,
}: SidebarItemProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const isExpandSubmenu = isExpandMenu && expandedItemId === section.id;

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
		setExpandedItemId(isExpandSubmenu ? null : section.id);
	};

	return (
		<li>
			<div
				className={clsx(
					'flex items-center justify-between w-full gap-x-1 py-1.5 mt-3 rounded-md no-underline cursor-pointer transition-all duration-300 ease-linear',
					isExpandMenu ? 'pr-3.5 pl-3' : '',
				)}
				onClick={toggleExpand}
			>
				<SidebarItemImage sectionId={section.id} />

				<SidebarItemText
					section={section}
					isExpandMenu={isExpandMenu}
					isExpanded={isExpanded}
				/>
			</div>
			{isExpandSubmenu && (
				<ul className="p-0 list-none block">
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
		</li>
	);
};

export default SidebarItem;
