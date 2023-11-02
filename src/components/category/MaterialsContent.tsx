import MaterialBlock from '@/components/common/modal/materials/materialblock/MaterialBlock';
import { useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import Header from '@/components/category/organisms/Header';
import MaterialModalContent from '@/components/common/modal/materials/content/MaterialModalContent';
import FilterMenuButton from '@/components/common/page/atoms/FilterMenuButton';
import SortMenuButton from '@/components/common/SortMenuButton';
import useMaterialService, { MaterialOpenSearch } from '@/hooks/services/useMaterialIdService';
import ResultCount from '@/components/common/page/atoms/ResultCount';
import useFiltersMenu from '@/hooks/useFiltersMenu';
import { openSearchBaseInitialState } from '@/utils/constant';

const MaterialsContent = ({ categoryId }: { categoryId: number }) => {
	const { getMaterials } = useMaterialService();
	const [materials, setMaterials] = useState<MaterialOpenSearch>(openSearchBaseInitialState);

	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal(false);
	const [currentMaterialId, setCurrentMaterialId] = useState<number>();

	const { FiltersMenu, isFilterMenuOpen, setIsFilterMenuOpen, filters } = useFiltersMenu();
	const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
	const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
	const [isMarkModalOpen, setIsMarkModalOpen] = useState(false);

	useEffect(() => {
		(async () => {
			setMaterials(
				await getMaterials(
					filters({
						categoryId,
					}),
				),
			);
		})();
	}, [categoryId, getMaterials, filters]);

	const handleOpenMaterialModal = (id: number) => {
		setCurrentMaterialId(id);
		if (id) {
			if (!isRatingModalOpen && !isAddedModalOpen && !isMarkModalOpen) {
				handleOpenModal();
			} else if (isRatingModalOpen || isAddedModalOpen || isMarkModalOpen) {
				handleCloseModal();
			}
		}
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
							isAddedModalOpen={isAddedModalOpen}
							setIsAddedModalOpen={setIsAddedModalOpen}
							isRatingModalOpen={isRatingModalOpen}
							setIsRatingModalOpen={setIsRatingModalOpen}
							isMarkModalOpen={isMarkModalOpen}
							setIsMarkModalOpen={setIsMarkModalOpen}
						/>
					))}
			</div>
			{isOpen && !isRatingModalOpen && !isAddedModalOpen && !isMarkModalOpen && (
				<Modal>
					<MaterialModalContent materialId={currentMaterialId} handleClose={handleCloseModal} />
				</Modal>
			)}
		</>
	);
};

export default MaterialsContent;
