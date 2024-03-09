import Title from '../../common/Title';
import { useState } from 'react';
import CategoryItem from '../molecules/CategoryItem';
import { useSectionsStore } from '@/store/sectionsSlice';
import { Category, Section } from '@/hooks/services/useSectionService';

const ChooseCategory = ({
	titletext,
	descriptiontext,
	categoryID,
	handleCategoryChange,
	sectionID,
}: {
	titletext: string;
	descriptiontext: string;
	categoryID: string;
	handleCategoryChange: (newCategoryID: string) => void;
	sectionID: string;
}) => {
	const { sections } = useSectionsStore();
	const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

	const handleCategorySelect = (category: Category) => {
		setSelectedCategory(category);
		const newCategoryID = category.id.toString();
		handleCategoryChange(newCategoryID);
	};

	return (
		<>
			<Title titletext={titletext} descriptiontext={descriptiontext} />
			{sections
				.filter((section) => section.id.toString() === sectionID)
				.map((section) =>
					section.categories.map((category) => (
						<CategoryItem
							key={category.id}
							category={category}
							setSelectedCategory={handleCategorySelect}
							isSelected={selectedCategory === category}
						/>
					)),
				)}
		</>
	);
};

export default ChooseCategory;
