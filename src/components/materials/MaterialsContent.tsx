import CategoryLinkButton from '@/components/materials/atoms/CategoryButton';
import useCategoryService, {
	CategoryDetailsResponse,
	CategoryMaterialsResponse,
} from '@/hooks/services/useCategoryService';
import MaterialBlock from '@/components/materials/molecules/MaterialBlock';
import { RxTriangleDown } from 'react-icons/rx';
import FiltersItem from '@/components/materials/atoms/FilterButton';
import { useContext, useEffect, useState } from 'react';
import useSectionService, { Section } from '@/hooks/services/useSectionService';
import { MaterialsFiltersContext } from '@/contexts/MaterialsFiltersContext';
import FilterMenu from '@/components/materials/organisms/FilterMenu';

const categoryMaterialResponseInitialState = {
	content: [],
	size: 20,
	pageable: {
		offset: 0,
		pageNumber: 0,
		pageSize: 20,
		paged: true,
	},
	totalPages: 1,
	totalElements: 0,
};

const MaterialsContent = ({ categoryId }: { categoryId: number }) => {
	const { getCategoryDetails, getCategoryMaterials } = useCategoryService();
	const [materials, setMaterials] = useState<CategoryMaterialsResponse>(
		categoryMaterialResponseInitialState,
	);
	const [categoryDetails, setCategoryDetails] =
		useState<CategoryDetailsResponse>();
	const { getSections } = useSectionService();
	const [section, setSection] = useState<Section>();
	const { filters } = useContext(MaterialsFiltersContext);
	console.log(filters);

	useEffect(() => {
		(async () => {
			setMaterials(await getCategoryMaterials(categoryId, {}));
		})();
	}, [categoryId]);

	useEffect(() => {
		(async () => {
			setCategoryDetails(await getCategoryDetails(categoryId));
		})();
	}, [categoryId]);

	useEffect(() => {
		(async () => {
			const sections = await getSections();
			setSection(sections.find((s: Section) => s.id === categoryId));
		})();
	}, [categoryId]);

	const mapCategoryDetails = (details: CategoryDetailsResponse) => {
		return `${details.section.name}/${details.name}`;
	};

	return (
		<>
			<div className="w-full px-3">
				<div className="w-full mt-4 text-semibold text-[36px]">
					{categoryDetails && <>{mapCategoryDetails(categoryDetails)}</>}
				</div>
				<div className="flex items-center flex-wrap sw-full gap-4 mt-4 px-4 text-xl text-semibold text-center">
					{section?.categories &&
						section.categories.map(({ id, name }) => (
							<CategoryLinkButton
								value={name}
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
				<div className="flex justify-between items-center w-full mt-4 px-8">
					<div>
						Znaleziono {materials ? materials.content.length : 0} elementów
					</div>
					<div className="relative flex items-center text-sky-500 cursor-pointer">
						<FilterMenu />
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full gap-4 py-4">
				{materials &&
					materials.content.map((material) => (
						<MaterialBlock key={material.id} data={material} />
					))}
			</div>
		</>
	);
};

export default MaterialsContent;
