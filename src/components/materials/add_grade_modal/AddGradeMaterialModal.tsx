import React, { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa6';

import AddGrade from '@/components/materials/add_grade_modal/stages/AddGrade';
import { MaterialButton } from '@/components/utils/Button';
import Modal from '@/components/utils/Modal';
import { useSessionContext } from '@/contexts/SessionContext';
import { useToast } from '@/contexts/ToastContext';
import MaterialService from '@/services/material/materialService';

enum Stage {
	GRADE,
}

export default function AddGradeMaterialModal({
	isOpen,
	onClose,
	materialId,
}: {
	isOpen: boolean;
	onClose: () => void;
	materialId: number;
}) {
	const { session } = useSessionContext();
	const [stage, setStage] = useState<Stage>(Stage.GRADE);
	const [rating, setRating] = useState<number>(1);
	const { addToast } = useToast();

	const handleAddMaterialChange = (newRating: number) => {
		setRating(newRating);
	};

	const getModalHeader = () => {
		switch (stage) {
			case Stage.GRADE:
				return 'Oceń Materiał';
		}
	};

	const getStageComponent = () => {
		switch (stage) {
			case Stage.GRADE:
				return <AddGrade rating={rating} onChange={handleAddMaterialChange} />;
		}
	};

	const handleClose = () => {
		setStage(Stage.GRADE);
		onClose();
	};

	const handlePublish = async () => {
		try {
			if (!session) {
				console.error('No session or Bearer token found');
				return;
			}

			const grade = rating.toFixed(1);

			await MaterialService.addGradeToMaterial(materialId, { grade });

			addToast(`Dodano ocenę`, 'success', 5000);
			handleClose();
		} catch (error) {
			addToast(`Error adding grade:`, 'danger', 5000);
			console.error('Error adding grade:', error);
		}
	};

	return (
		<>
			{isOpen && (
				<Modal onClose={handleClose} className="h-fit w-[90%] sm:w-2/3">
					<div className="w-full text-center">
						<h3 className="text-3xl font-semibold text-secondary">{getModalHeader()}</h3>
					</div>
					<div className="w-full pt-8">{getStageComponent()}</div>
					<div className="flex items-center justify-end">
						<MaterialButton onClick={handlePublish} type="yellow">
							Oceń <FaAngleRight />
						</MaterialButton>
					</div>
				</Modal>
			)}
		</>
	);
}
