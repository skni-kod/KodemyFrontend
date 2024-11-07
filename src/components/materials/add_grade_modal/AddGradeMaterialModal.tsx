import React, { useEffect, useState } from 'react';
import Modal from '@/components/utils/Modal';
import AddGrade from '@/components/materials/add_grade_modal/stages/AddGrade';

enum Stage {
	GRADE,
}

export default function AddGradeMaterialModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
	const [stage, setStage] = useState<Stage>(Stage.GRADE);

	const getModalSize = () => {
		switch (stage) {
			case Stage.GRADE:
		}
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
				return <AddGrade />;
		}
	};

	const handleClose = () => {
		setStage(Stage.GRADE);
		onClose();
	};

	return (
		<>
			{isOpen && (
				<Modal onClose={handleClose} className={`${getModalSize()} max-w-xs xs:w-full`}>
					<div className="w-full text-center">
						<h3 className="text-3xl font-semibold">{getModalHeader()}</h3>
					</div>
					<div className="w-full pt-8">{getStageComponent()}</div>
				</Modal>
			)}
		</>
	);
}
