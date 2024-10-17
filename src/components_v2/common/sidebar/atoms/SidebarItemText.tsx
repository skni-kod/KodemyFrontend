import React from 'react';
import { Section } from '@/hooks/services/useSectionService';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

interface SidebarItemTextProps {
	section: Section;
	isExpandMenu: boolean;
	isExpanded: boolean;
}

const SidebarItemText = ({ section, isExpandMenu, isExpanded }: SidebarItemTextProps) => {
	return (
		<div className="flex-grow flex items-center justify-between">
			{isExpandMenu && (
				<>
					<span className="whitespace-nowrap overflow-hidden">{section.name}</span>
					<div>{isExpanded ? <AiOutlineDown /> : <AiOutlineRight />}</div>
				</>
			)}
		</div>
	);
};

export default SidebarItemText;
