import Title from '../atoms/Title';
import { useState } from 'react';
import CategoryItem from '../molecules/CategoryItem';
import { useSectionsStore } from '@/store/sectionsSlice';
import { Category } from '@/hooks/services/useSectionService';

const ChooseCategory = ({
	titletext,
	descriptiontext,
	section,
}: {
	titletext: string;
	descriptiontext: string;
	section: string;
}) => {
	const { sections } = useSectionsStore();
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

	const handleCategorySelect = (category: Category) => {
		setSelectedCategory(category);
		// const newCategoryID = category.id.toString();
		// handleCategoryChange(newCategoryID);
	};

	const selectedSection = sections.find((s) => s.name === section);

	return (
		<>
			<Title titletext={titletext} descriptiontext={descriptiontext} />
			{selectedSection &&
				selectedSection.categories.map((category) => (
					<CategoryItem
						key={category.id}
						category={category}
						setSelectedCategory={handleCategorySelect}
						isSelected={selectedCategory === category}
					/>
				))}
		</>
	);
};

export default ChooseCategory;
