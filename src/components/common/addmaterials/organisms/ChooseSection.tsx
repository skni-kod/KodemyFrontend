import { useSectionsStore } from '@/store/sectionsSlice';
import Title from '../atoms/Title';
import SectionItem from '../molecules/SectionItem';
import { useState } from 'react';
import { Section } from '@/hooks/services/useSectionService';

const ChooseSection = ({
	titletext,
	descriptiontext,
	sectionID,
	handleSectionChange,
}: {
	titletext: string;
	descriptiontext: string;
	sectionID: string;
	handleSectionChange: (newSectionID: string) => void;
}) => {
	const { sections } = useSectionsStore();
	const [selectedSection, setSelectedSection] = useState<Section | null>(null);

	const handleSectionSelect = (section: Section) => {
		setSelectedSection(section);
		const newSectionID = section.id.toString();
		handleSectionChange(newSectionID);
	};

	return (
		<>
			<Title titletext={titletext} descriptiontext={descriptiontext} />
			{sections &&
				sections.map((section, index) => (
					<SectionItem
						key={index}
						section={section}
						setSelectedSection={handleSectionSelect}
						isSelected={selectedSection === section}
					/>
				))}
		</>
	);
};

export default ChooseSection;
