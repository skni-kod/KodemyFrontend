import MaterialBlock from '@/components/common/modal/materials/materialblock/MaterialBlock';
import { useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import Header from '@/components/category/organisms/Header';
import MaterialModalContent from '@/components/common/modal/materials/content/MaterialModalContent';
import FilterMenuButton from '@/components/common/filter/atoms/FilterMenuButton';
import SortMenuButton from '@/components/common/filter/SortMenuButton';
import useMaterialService, { MaterialOpenSearch } from '@/hooks/services/useMaterialIdService';
import ResultCount from '@/components/common/filter/atoms/ResultCount';
import useFiltersMenu from '@/hooks/useFiltersMenu';
import { openSearchBaseInitialState } from '@/utils/constant';
import PageWrapper from '../common/page/organisms/PageWrapper';
import { pageCategoryIdRoute } from '@/pages/category/[categoryId]/page/[pageId]';
import router from 'next/router';

const MaterialsContent = ({
	categoryId,
	pageId,
	materials,
	FiltersMenu,
	isFilterMenuOpen,
	setIsFilterMenuOpen,
	currentPageForButtons,
	setCurrentPage,
}: {
	categoryId: number;
	pageId: number;
	materials: MaterialOpenSearch;
	FiltersMenu: () => JSX.Element;
	isFilterMenuOpen: boolean;
	setIsFilterMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	currentPageForButtons: number;
	setCurrentPage: (categoryId: number, pageId: number) => void;
}) => {
	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal(false);
	const [currentMaterialId, setCurrentMaterialId] = useState<number>();

	const [isRatingModalOpen, setIsRatingModalOpen] = useState(false);
	const [isAddedModalOpen, setIsAddedModalOpen] = useState(false);
	const [isMarkModalOpen, setIsMarkModalOpen] = useState(false);

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

	const totalElements = materials.totalElements;
	const totalPages = materials.totalPages;

	return (
		<>
			<div className="w-full px-3 text-black2white md:pl-28">
				<Header categoryId={categoryId} />
				<div className="flex justify-between items-center w-full pt-4 px-8">
					<ResultCount value={totalElements} />
					<div className="relative flex gap-x-8 text-black2white cursor-pointer">
						{!isFilterMenuOpen && <SortMenuButton />}
						<FilterMenuButton isMenuOpen={isFilterMenuOpen} setIsMenuOpen={setIsFilterMenuOpen} />
					</div>
				</div>
			</div>
			<div className="w-full px-3 text-black2white md:pl-28">
				{isFilterMenuOpen && <FiltersMenu />}
			</div>
			<PageWrapper
				currentPage={currentPageForButtons}
				totalPages={totalPages}
				setCurrentPage={(newPage: number) => setCurrentPage(categoryId, newPage)}
				routing={(currentPage, categoryId) =>
					router.push(pageCategoryIdRoute(Number(categoryId), Number(pageId)))
				}
				categoryId={categoryId}
			>
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
			</PageWrapper>
			{isOpen && !isRatingModalOpen && !isAddedModalOpen && !isMarkModalOpen && (
				<Modal>
					<MaterialModalContent materialId={currentMaterialId} handleClose={handleCloseModal} />
				</Modal>
			)}
		</>
	);
};

export default MaterialsContent;
