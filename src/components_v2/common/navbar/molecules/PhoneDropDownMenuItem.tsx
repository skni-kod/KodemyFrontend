import React, { useState } from 'react';
import clsx from 'clsx';
import SidebarItemImage from '../../sidebar/atoms/SidebarItemImage';
import { Section } from '@/hooks/services/useSectionService';
import PhoneDropDownMenuItemText from '../atoms/PhoneDropDownMenuItemText';
import PhoneDropDownMenuItemSubmenu from '../atoms/PhoneDropDownMenuItemSubmenu';

interface PhoneDropDownMenuItemProps {
	section: Section;
	expandedItemId: number | null;
	setExpandedItemId: (id: number | null) => void;
}

const PhoneDropDownMenuItem = ({
	section,
	expandedItemId,
	setExpandedItemId,
}: PhoneDropDownMenuItemProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const isExpandSubmenu = expandedItemId === section.id;

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
		setExpandedItemId(isExpandSubmenu ? null : section.id);
	};

	return (
		<li>
			<div
				className={clsx(
					'flex items-center justify-between w-full gap-x-1 py-1.5 mt-3 rounded-md no-underline cursor-pointer transition-width duration-300 ease-linear',
				)}
				onClick={toggleExpand}
			>
				<SidebarItemImage sectionId={section.id} />

				<PhoneDropDownMenuItemText section={section} isExpanded={isExpanded} />
			</div>
			<PhoneDropDownMenuItemSubmenu section={section} expandedItemId={expandedItemId} />
		</li>
	);
};

export default PhoneDropDownMenuItem;
