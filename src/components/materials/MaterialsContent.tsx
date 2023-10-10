import { CategoryMaterialsResponse } from '@/hooks/services/useCategoryService';
import MaterialBlock from '@/components/materials/molecules/MaterialBlock';
import { useCallback, useContext, useEffect, useState } from 'react';
import FiltersMenu from '@/components/common/page/organisms/FiltersMenu';
import useModal from '@/hooks/useModal';
import Header from '@/components/materials/organisms/Header';
import MaterialModalContent from '@/components/materials/organisms/MaterialModalContent';
import FilterMenuButton from '@/components/common/page/atoms/FilterMenuButton';
import SortMenuButton from '@/components/materials/organisms/SortMenuButton';
import { MaterialsFiltersContext } from '@/contexts/MaterialsFiltersContext';
import { SortDirection } from '@/utils/model';
import useMaterialService from '@/hooks/services/useMaterialService';
import ResultCount from '@/components/common/page/atoms/ResultCount';

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
	const { getMaterials } = useMaterialService();
	const [materials, setMaterials] = useState<CategoryMaterialsResponse>(
		categoryMaterialResponseInitialState,
	);

	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal(false);
	const [currentMaterialId, setCurrentMaterialId] = useState<number>();

	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

	const { filters } = useContext(MaterialsFiltersContext);

	const mapFilters = useCallback(() => {
		const size = filters['size']?.value;
		const page = filters['page']?.value;
		const sort = filters['sort']?.value;
		const sortDirection = SortDirection[filters['sort_direction']?.value];
		const searchFields = {
			categoryId,
			status: filters['status']?.value,
			phrase: filters['phrase']?.value,
		};
		return {
			size,
			page,
			sort,
			sortDirection,
			searchFields,
		};
	}, [filters, categoryId]);

	useEffect(() => {
		(async () => {
			setMaterials(await getMaterials(mapFilters()));
		})();
	}, [categoryId, getMaterials, filters, mapFilters]);

	const handleOpenMaterialModal = (id: number) => {
		setCurrentMaterialId(id);
		if (id) handleOpenModal();
	};

	return (
		<>
			<div className="w-full px-3 text-black2white">
				<Header categoryId={categoryId} />
				<div className="flex justify-between items-center w-full pt-4 px-8">
					<ResultCount value={materials.content.length} />
					<div className="relative flex gap-x-8 text-black2white cursor-pointer">
						{!isFilterMenuOpen && <SortMenuButton />}
						<FilterMenuButton isMenuOpen={isFilterMenuOpen} setIsMenuOpen={setIsFilterMenuOpen} />
					</div>
				</div>
			</div>
			<div className="w-full px-3 text-black2white">{isFilterMenuOpen && <FiltersMenu />}</div>
			<div className="flex flex-col w-full gap-4 pt-6 pb-4">
				{materials &&
					materials.content.map((material) => (
						<MaterialBlock
							key={material.id}
							data={material}
							handleOpenModal={handleOpenMaterialModal}
						/>
					))}
			</div>
			{isOpen && (
				<Modal>
					<MaterialModalContent materialId={currentMaterialId} handleClose={handleCloseModal} />
				</Modal>
			)}
		</>
	);
};

export default MaterialsContent;
