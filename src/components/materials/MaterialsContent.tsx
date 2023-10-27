import MaterialBlock from '@/components/materials/molecules/MaterialBlock';
import { useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import Header from '@/components/materials/organisms/Header';
import MaterialModalContent from '@/components/materials/organisms/MaterialModalContent';
import FilterMenuButton from '@/components/common/page/atoms/FilterMenuButton';
import SortMenuButton from '@/components/materials/organisms/SortMenuButton';
import useMaterialService, { MaterialOpenSearch } from '@/hooks/services/useMaterialService';
import ResultCount from '@/components/common/page/atoms/ResultCount';
import useFiltersMenu from '@/hooks/useFiltersMenu';
import { openSearchBaseInitialState } from '@/utils/constant';

const MaterialsContent = ({ categoryId }: { categoryId: number }) => {
	const { getMaterials } = useMaterialService();
	const [materials, setMaterials] = useState<MaterialOpenSearch>(openSearchBaseInitialState);

	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal(false);
	const [currentMaterialId, setCurrentMaterialId] = useState<number>();

	const { FiltersMenu, isFilterMenuOpen, setIsFilterMenuOpen, filters } = useFiltersMenu();

	const [isFavouriteClicked, setIsFavouriteClicked] = useState(false);

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
		setIsFavouriteClicked(false);
		if (isFavouriteClicked == false) handleOpenModal();
		setCurrentMaterialId(id);
		if (id) handleOpenModal();
	};

	const [isFilled, setIsFilled] = useState(false);

	const handleFavouriteClick = () => {
		setIsFilled(!isFilled);
		setIsFavouriteClicked(true);
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
							isFavouriteFilled={isFilled}
							handleFavouriteClick={handleFavouriteClick}
						/>
					))}
			</div>
			{isOpen && !isFavouriteClicked && (
				<Modal>
					<MaterialModalContent materialId={currentMaterialId} handleClose={handleCloseModal} />
				</Modal>
			)}
		</>
	);
};

export default MaterialsContent;
