import CategoryLinkButton from '@/components/materials/atoms/CategoryButton';
import useCategoryService, {
	CategoryDetailsResponse,
	CategoryMaterialsResponse,
	Material,
} from '@/hooks/services/useCategoryService';
import MaterialBlock from '@/components/materials/molecules/MaterialBlock';
import FiltersItem from '@/components/materials/atoms/FilterButton';
import { useContext, useEffect, useState } from 'react';
import { Section } from '@/hooks/services/useSectionService';
import { MaterialsFiltersContext } from '@/contexts/MaterialsFiltersContext';
import FilterMenu from '@/components/materials/organisms/FilterMenu';
import { useSectionsStore } from '@/store/sectionsSlice';
import useModal from '@/hooks/useModal';
import Header from '@/components/materials/organisms/Header';
import MaterialModalContent from '@/components/materials/organisms/MaterialModalContent';

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
	const { getCategoryMaterials } = useCategoryService();
	const [materials, setMaterials] = useState<CategoryMaterialsResponse>(
		categoryMaterialResponseInitialState,
	);

	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal(false);
	const [currentMaterialId, setCurrentMaterialId] = useState<number>();

	useEffect(() => {
		(async () => {
			setMaterials(await getCategoryMaterials(categoryId, {}));
		})();
	}, [categoryId]);

	const handleOpenMaterialModal = (id: number) => {
		setCurrentMaterialId(id);
		if (id) handleOpenModal();
	};

	return (
		<>
			<div className="w-full px-3 text-black2white">
				<Header categoryId={categoryId} />
				<div className="flex justify-between items-center w-full mt-4 px-8">
					<div>
						Znaleziono{' '}
						<span className="text-sky-500">{materials ? materials.content.length : 'NaN'}</span>{' '}
						elementów
					</div>
					<div className="relative flex items-center text-sky-500 cursor-pointer">
						<FilterMenu />
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full gap-4 py-4">
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
