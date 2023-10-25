import { useSectionsStore } from '@/store/sectionsSlice';

import Title from '../atoms/Title';
import SectionItem from '../molecules/SectionItem';
import { useState } from 'react';
import { Section } from '@/hooks/services/useSectionService';

const ChooseSection = ({
	titletext,
	descriptiontext,
}: {
	titletext: string;
	descriptiontext: string;
}) => {
	const { sections } = useSectionsStore();
	const [selectedSection, setSelectedSection] = useState<Section | null>(null); // Zmieniamy typ selectedSection

	return (
		<>
			<Title titletext={titletext} descriptiontext={descriptiontext} />
			{sections &&
				sections.map((section, index) => (
					<SectionItem
						key={index}
						section={section}
						setSelectedSection={setSelectedSection}
						isSelected={selectedSection === section}
					/>
				))}
		</>
	);
};

export default ChooseSection;
