import React from 'react';
import clsx from 'clsx';
import { Section } from '@/hooks/services/useSectionService';
import SectionItemImage from '../atoms/SectionItemImage';
import SectionItemText from '../atoms/SectionItemText';

interface SidebarItemProps {
	section: Section;
	setSelectedSection: (section: Section) => void;
	isSelected: boolean;
}

const SectionItem = ({ section, setSelectedSection, isSelected }: SidebarItemProps) => {
	const handleClick = () => {
		setSelectedSection(section);
	};

	const itemClasses = clsx(
		'flex text-black2white text-center px-5 py-5 border border-black2white rounded-lg mx-6 my-4',
		{
			'border-sky-500': isSelected,
		},
	);

	return (
		<div className={itemClasses} onClick={handleClick}>
			<SectionItemImage sectionId={section.id} />
			<SectionItemText section={section} />
		</div>
	);
};

export default SectionItem;
