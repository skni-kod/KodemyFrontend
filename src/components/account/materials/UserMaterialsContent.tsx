import { useEffect, useState } from 'react';
import HeaderAllMaterials from '@/components/common/page/organisms/HeaderAllMaterials';
import ResultCount from '@/components/common/page/atoms/ResultCount';
import SortMenuButton from '@/components/common/SortMenuButton';
import FilterMenuButton from '@/components/common/page/atoms/FilterMenuButton';
import useMaterialService, { MaterialOpenSearch } from '@/hooks/services/useMaterialIdService';
import useFiltersMenu from '@/hooks/useFiltersMenu';
import useModal from '@/hooks/useModal';
import { openSearchBaseInitialState } from '@/utils/constant';
import MaterialBlock from '@/components/common/modal/materials/materialblock/MaterialBlock';
import MaterialModalContent from '@/components/common/modal/materials/content/MaterialModalContent';

type CurrentIds = {
	material: number | undefined;
	section: number | undefined;
	category: number | undefined;
};

const currentIdsInitState: CurrentIds = {
	material: undefined,
	section: undefined,
	category: undefined,
};

const UserMaterialsContent = () => {
	const { getMaterials } = useMaterialService();
	const [materials, setMaterials] = useState<MaterialOpenSearch>(openSearchBaseInitialState);

	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal(false);
	const [currentIds, setCurrentIds] = useState<CurrentIds>(currentIdsInitState);

	const { FiltersMenu, filters, isFilterMenuOpen, setIsFilterMenuOpen } = useFiltersMenu();
	const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
	const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
	const [isMarkModalOpen, setIsMarkModalOpen] = useState(false);

	useEffect(() => {
		(async () => {
			setMaterials(
				await getMaterials(
					filters({
						sectionId: currentIds.section,
						categoryId: currentIds.category,
					}),
				),
			);
		})();
	}, [currentIds.category, currentIds.section, filters, getMaterials]);

	const handleOpenMaterialModal = (id: number) => {
		setCurrentIds({
			...currentIds,
			material: id,
		});
		if (id) handleOpenModal();
	};

	return (
		<>
			<div className="w-full px-3 text-black2white">
				<HeaderAllMaterials headName="Twoje materiałów" />
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
			{isOpen && (
				<Modal>
					<MaterialModalContent materialId={currentIds.material} handleClose={handleCloseModal} />
				</Modal>
			)}
		</>
	);
};
export default UserMaterialsContent;
