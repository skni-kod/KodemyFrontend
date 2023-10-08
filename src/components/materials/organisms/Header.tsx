import CategoryLinkButton from '@/components/materials/atoms/CategoryButton';
import FiltersItem from '@/components/materials/atoms/FilterButton';
import { useContext, useEffect, useState } from 'react';
import { Section } from '@/hooks/services/useSectionService';
import { useSectionsStore } from '@/store/sectionsSlice';
import useCategoryService, { CategoryDetailsResponse } from '@/hooks/services/useCategoryService';
import { MaterialsFiltersContext } from '@/contexts/MaterialsFiltersContext';

const Header = ({ categoryId }: { categoryId: number }) => {
	const { sections } = useSectionsStore();
	const [section, setSection] = useState<Section>();

	const { getCategoryDetails } = useCategoryService();
	const [categoryDetails, setCategoryDetails] = useState<CategoryDetailsResponse>();

	const { filters } = useContext(MaterialsFiltersContext);

	useEffect(() => {
		setSection(sections.find((s: Section) => s.id === categoryDetails?.section.id));
	}, [sections, categoryDetails]);

	useEffect(() => {
		(async () => {
			setCategoryDetails(await getCategoryDetails(categoryId));
		})();
	}, [categoryId]);

	return (
		<>
			<div className="w-full mt-4 text-semibold text-[36px]">
				{categoryDetails && <>{categoryDetails.section.name}</>}
			</div>
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
			<div className="flex items-center w-full gap-4 mt-4 px-4 text-sm text-semibold text-center">
				{filters.map((filter, index) => (
					<FiltersItem key={index} value={filter} />
				))}
			</div>
		</>
	);
};

export default Header;
