import useCategoryService, { CategoryMaterialsResponse } from '@/hooks/services/useCategoryService';
import MaterialBlock from '@/components/materials/molecules/MaterialBlock';
import { useEffect, useState } from 'react';
import FilterMenu from '@/components/materials/organisms/FilterMenu';
import useModal from '@/hooks/useModal';
import Header from '@/components/materials/organisms/Header';
import MaterialModalContent from '@/components/materials/organisms/MaterialModalContent';
import FilterMenuButton from '@/components/materials/atoms/FilterMenuButton';
import SortMenuButton from '@/components/materials/organisms/SortMenuButton';

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

	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

	useEffect(() => {
		(async () => {
			setMaterials(await getCategoryMaterials(categoryId, {}));
		})();
	}, [categoryId, getCategoryMaterials]);

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
					<div className="relative flex gap-x-8 text-black2white cursor-pointer">
						{!isFilterMenuOpen && <SortMenuButton />}
						<FilterMenuButton isMenuOpen={isFilterMenuOpen} setIsMenuOpen={setIsFilterMenuOpen} />
					</div>
				</div>
			</div>
			<div className="w-full px-3 text-black2white">{isFilterMenuOpen && <FilterMenu />}</div>
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
