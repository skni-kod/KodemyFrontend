import useMaterialService from '@/hooks/services/useMaterialIdService';
import useModal from '@/hooks/useModal';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MaterialWrapper from '../common/page/atoms/MaterialWrapper';
import MaterialModalMark from '../common/modal/materials/materialblock/molecules/mark/MaterialModalMark';

const MaterialContent = () => {
	const router = useRouter();
	const { getMaterialById } = useMaterialService();

	const [material, setMaterial] = useState(null);

	useEffect(() => {
		const { materialId } = router.query;

		const fetchMaterialById = async () => {
			try {
				const materialData = await getMaterialById(Number(materialId));
				setMaterial(materialData);
				console.log(materialData);
			} catch (error) {
				console.error('Error fetching material by ID', error);
			}
		};

		if (materialId) {
			fetchMaterialById();
		}
	}, [router.query, getMaterialById]);

	const [isMarkModalOpen, setIsMarkModalOpen] = useState(false);
	const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal(false);
	const [currentMaterialId, setCurrentMaterialId] = useState<number>();

	const handleOpenMaterialModal = (id: number) => {
		setCurrentMaterialId(id);
		if (id) {
			if (!isMarkModalOpen) {
				handleOpenModal();
			} else if (isMarkModalOpen) {
				handleCloseModal();
			}
		}
	};

	const openMarkModal = () => {
		setIsMarkModalOpen(true);
	};

	const handleCloseMarkModal = () => {
		setIsMarkModalOpen(false);
	};
	return (
		<div className="bg-white2verydarkgrey min-h-[100vh] py-20 w-full px-3 text-black2white md:pl-28">
			{material ? (
				<>
					<h2 className="w-full mt-4 text-semibold text-[36px]">Tytuł: {material.title}</h2>
					<div className="w-full mt-4 text-semibold text-[16px]">
						<p>id: {material.id}</p>
						<p>opis: {material.description}</p>
						<p>autor: {material.author.username}</p>
						<p>i tak dalej....</p>
						<p>To jest do zrobienia</p>
					</div>
					<div className="flex flex-col justify-center w-auto py-5 px-2" onClick={openMarkModal}>
						<button
							className="text-black bg-yellow-400 rounded-lg px-3 py-0.5"
							title="Usuń z ulubionych"
						>
							Oceń
						</button>
					</div>
					{isMarkModalOpen && (
						<Modal>
							<MaterialModalMark handleCloseMarkModal={handleCloseMarkModal} id={material.id} />
						</Modal>
					)}
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default MaterialContent;
