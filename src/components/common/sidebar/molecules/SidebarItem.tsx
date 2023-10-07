import React, { useState } from 'react';
import clsx from 'clsx';
import SidebarItemImage from '../atoms/SidebarItemImage';
import SidebarItemText from '../atoms/SidebarItemText';
import { Section } from '@/hooks/services/useSectionService';
import SidebarSubmenu from '../atoms/SidebarSubmenu';

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
			<SidebarSubmenu
				section={section}
				isExpandMenu={isExpandMenu}
				expandedItemId={expandedItemId}
			/>
		</li>
	);
};

export default SidebarItem;
