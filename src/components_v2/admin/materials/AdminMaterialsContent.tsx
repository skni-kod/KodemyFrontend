import { useEffect, useState } from 'react';
import HeaderAllMaterials from '@/components/common/page/organisms/HeaderAllMaterials';
import ResultCount from '@/components/common/filter/atoms/ResultCount';
import SortMenuButton from '@/components/common/filter/SortMenuButton';
import FilterMenuButton from '@/components/common/filter/atoms/FilterMenuButton';
import useMaterialService, { MaterialOpenSearch } from '@/hooks/services/useMaterialService';
import { pageInitialState } from '@/utils/constant';
import useFiltersMenu from '@/hooks/useFiltersMenu';
import useModal from '@/hooks/useModal';
import MaterialModalContent from '@/components/common/modal/materials/content/MaterialModalContent';
import ManagementMaterialBlock from '@/components/common/page/molecules/ManagementMaterialBlock';
import AdminMaterialBlockButtons from '@/components/admin/materials/molecules/AdminMaterialBlockButtons';

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

const AdminMaterialsContent = () => {
	const { getMaterials } = useMaterialService();
	const [materials, setMaterials] = useState<MaterialOpenSearch>(pageInitialState);
	const { FiltersMenu, filters, isFilterMenuOpen, setIsFilterMenuOpen } = useFiltersMenu();

	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal(false);
	const [currentIds, setCurrentIds] = useState<CurrentIds>(currentIdsInitState);

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

	return (
		<>
			<div className="w-full px-3 text-black2white md:pl-28">
				<HeaderAllMaterials headName="Statusy materiałów" />
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
						<ManagementMaterialBlock key={material.id} data={material}>
							<AdminMaterialBlockButtons />
						</ManagementMaterialBlock>
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
export default AdminMaterialsContent;
