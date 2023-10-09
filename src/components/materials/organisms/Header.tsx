import CategoryLinkButton from '@/components/materials/atoms/CategoryButton';
import { useEffect, useState } from 'react';
import { Section } from '@/hooks/services/useSectionService';
import { useSectionsStore } from '@/store/sectionsSlice';
import useCategoryService, { CategoryDetailsResponse } from '@/hooks/services/useCategoryService';

const Header = ({ categoryId }: { categoryId: number }) => {
	const { sections } = useSectionsStore();
	const [section, setSection] = useState<Section>();

	const { getCategoryDetails } = useCategoryService();
	const [categoryDetails, setCategoryDetails] = useState<CategoryDetailsResponse>();

	useEffect(() => {
		setSection(sections.find((s: Section) => s.id === categoryDetails?.section.id));
	}, [sections, categoryDetails]);

	useEffect(() => {
		(async () => {
			setCategoryDetails(await getCategoryDetails(categoryId));
		})();
	}, [categoryId, getCategoryDetails]);

	return (
		<>
			<h2 className="w-full mt-4 text-semibold text-[36px]">
				{categoryDetails && <>{categoryDetails.section.name}</>}
			</h2>
			<div className="flex items-center flex-wrap sw-full gap-4 mt-4 px-4 text-xl text-semibold text-center">
				{section?.categories &&
					section.categories.map(({ id, name }) => (
						<CategoryLinkButton
							value={{ id, name }}
							key={id}
							selected={id === categoryDetails?.id}
						/>
					))}
			</div>
			<div className="flex items-center w-full gap-4 mt-4 px-4 text-sm text-semibold text-center"></div>
		</>
	);
};

export default Header;
