import CategoryLinkButton from '@/components/materials/atoms/CategoryButton';
import { useContext, useEffect, useState } from 'react';
import { Section } from '@/hooks/services/useSectionService';
import { useSectionsStore } from '@/store/sectionsSlice';
import useCategoryService, { CategoryDetailsResponse } from '@/hooks/services/useCategoryService';
import { MaterialsFiltersContext } from '@/contexts/MaterialsFiltersContext';
import FilterButton from '@/components/materials/atoms/FilterButton';
import { capitalizeString } from '@/utils/constant';

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

	const { filters } = useContext(MaterialsFiltersContext);
	const [filtersTable, setFiltersTable] = useState<{ key: string; value: string }[]>([]);

	useEffect(() => {
		const localFiltersTable = new Array<{ key: string; value: string }>();
		Object.entries(filters).forEach(([key, filter]) => {
			switch (key) {
				case 'sort_direction':
					return;
				case 'sort':
					const order = capitalizeString(`${filters['sort_direction'].lang?.value}`);
					localFiltersTable.push({
						key,
						value: `${filter.lang?.key}: ${filter.lang?.value} (${order})`,
					});
					break;
				default:
					localFiltersTable.push({
						key,
						value: `${filter.lang?.key}: ${filter.lang?.value}`,
					});
			}
		});
		setFiltersTable(localFiltersTable.sort((a, b) => a.key.localeCompare(b.key)));
	}, [filters]);

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
			{filtersTable.length > 0 && (
				<div className="flex items-center w-full gap-4 mt-4 px-4 text-sm text-semibold text-center">
					{filtersTable.map((value, index) => (
						<FilterButton key={index} value={value} />
					))}
				</div>
			)}
		</>
	);
};

export default Header;
