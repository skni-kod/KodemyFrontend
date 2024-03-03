import MaterialBlock from '@/components_v2/common/modal/materials/materialblock/MaterialBlock';
import { useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import Header from '@/components_v2/category/organisms/Header';
import MaterialModalContent from '@/components_v2/common/modal/materials/content/MaterialModalContent';
import FilterMenuButton from '@/components_v2/common/filter/atoms/FilterMenuButton';
import SortMenuButton from '@/components_v2/common/filter/SortMenuButton';
import useMaterialService, { MaterialOpenSearch } from '@/hooks/services/useMaterialService';
import ResultCount from '@/components_v2/common/filter/atoms/ResultCount';
import useFiltersMenu from '@/hooks/useFiltersMenu';
import { pageInitialState } from '@/utils/constant';

const MaterialsContent = ({ categoryId }: { categoryId: number }) => {
	const { getMaterials } = useMaterialService();
	const [materials, setMaterials] = useState<MaterialOpenSearch>(pageInitialState);

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
			<div className="w-full px-3 text-black2white md:pl-28">
				<Header categoryId={categoryId} />
				<div className="flex justify-between items-center w-full pt-4 px-8">
					<ResultCount value={materials.content.length} />
					<div className="relative flex gap-x-8 text-black2white cursor-pointer">
						{!isFilterMenuOpen && <SortMenuButton />}
						<FilterMenuButton isMenuOpen={isFilterMenuOpen} setIsMenuOpen={setIsFilterMenuOpen} />
					</div>
				</div>
			</div>
			<div className="w-full px-3 text-black2white md:pl-28">{isFilterMenuOpen && <FiltersMenu />}</div>
			<div className="flex flex-col w-full gap-4 pt-6 pb-4 md:pl-28 md:w-11/12 xl:w-full">
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