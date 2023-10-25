import React from 'react';
import { Section } from '@/hooks/services/useSectionService';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';

interface SidebarItemTextProps {
	section: Section;
}

const SectionItemText = ({ section }: SidebarItemTextProps) => {
	return (
		<div className="flex-grow flex items-center justify-between">
			<span className="whitespace-nowrap overflow-hidden">{section.name}</span>
		</div>
	);
};

export default SectionItemText;