import React from 'react';
import { Section } from '@/hooks/services/useSectionService';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

interface PhoneDropDownMenuItemTextProps {
	section: Section;
	isExpanded: boolean;
}

const PhoneDropDownMenuItemText = ({
	section,
	isExpanded,
}: PhoneDropDownMenuItemTextProps) => {
	return (
		<div className="flex-grow flex items-center justify-between">
			<span className="whitespace-nowrap overflow-hidden">{section.name}</span>
			<div>{isExpanded ? <AiOutlineDown /> : <AiOutlineRight />}</div>
		</div>
	);
};

export default PhoneDropDownMenuItemText;
