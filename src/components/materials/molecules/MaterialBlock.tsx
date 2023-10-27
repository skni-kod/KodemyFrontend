import React, { useState } from 'react';
import { Material } from '@/hooks/services/useMaterialService';
import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';
import Status from '@/components/materials/atoms/Status';
import MaterialWrapper from '@/components/common/page/atoms/MaterialWrapper';
import { Rating } from 'react-simple-star-rating';
import Favourite from '../atoms/Favourite';
import Modal from '@/components/common/Modal/Modal';
import MaterialModalRating from '../organisms/MaterialModalRating';
import MaterialModalAdd from '../organisms/MaterialModalAdd';

type MaterialProps = {
	data: Material;
	handleOpenModal: (id: number) => void;
	isAddedModalOpen: boolean;
	setIsAddedModalOpen: (value: boolean) => void;
	isRatingModalOpen: boolean;
	setIsRatingModalOpen: (value: boolean) => void;
};

const MaterialBlock = ({
	data: { id, title, description, status, user, createdDate },
	handleOpenModal,
	isAddedModalOpen,
	setIsAddedModalOpen,
	isRatingModalOpen,
	setIsRatingModalOpen,
}: MaterialProps) => {
	const openAddedModal = () => {
		setIsAddedModalOpen(true);
	};

	const handleCloseAddedModal = () => {
		setIsAddedModalOpen(false);
	};

	const openRatingModal = () => {
		setIsRatingModalOpen(true);
	};

	const handleCloseRatingModal = () => {
		setIsRatingModalOpen(false);
	};

	const ratingFive = 0;
	const ratingFour = 40;
	const ratingThree = 100;
	const ratingTwo = 20;
	const ratingOne = 50;
	const allRatings = ratingOne + ratingTwo + ratingThree + ratingFour + ratingFive;
	const averageRating =
		(5 * ratingFive + 4 * ratingFour + 3 * ratingThree + 2 * ratingTwo + ratingOne) / allRatings;

	return (
		<MaterialWrapper onClick={() => handleOpenModal(id)}>
			<div className="flex-none h-20 w-20 flex justify-center items-center aspect-square bg-gray-100">
				<Image
					src={DocumentsImage.src}
					alt="Materiał Kodemy"
					className="aspect-square"
					width="50"
					height="50"
				/>
			</div>
			<div className="grow flex justify-between items-center px-5">
				<div>
					<div onClick={openRatingModal}>
						<Rating
							initialValue={averageRating}
							SVGstyle={{ display: 'inline' }}
							size={16}
							allowFraction
							readonly
						/>
					</div>
					<div className="text-xl text-black2white text-bold mt-0.5 text-ellipsis">{title}</div>
					<div className="text-sm text-bold">{description}</div>
				</div>
			</div>
			<div className="flex flex-col justify-center w-auto py-5 px-2">
				<Status status={status} />
			</div>
			<div
				className="flex flex-col justify-center w-auto min-w-52 min-h-5 h-16 py-5 px-2 border-l-2"
				onClick={openAddedModal}
			>
				<Favourite />
			</div>
			<div className="flex flex-col justify-center w-52 min-w-52 min-h-5 h-16 pl-5 py-2 gap-1 border-l-2 text-xs">
				<div>Dodane przez: {user}</div>
				<div>Data dodania: {createdDate.split('T')[0]}</div>
			</div>
			{isRatingModalOpen && (
				<Modal>
					<MaterialModalRating
						handleCloseRatingModal={handleCloseRatingModal}
						ratingFive={ratingFive}
						ratingFour={ratingFour}
						ratingThree={ratingThree}
						ratingTwo={ratingTwo}
						ratingOne={ratingOne}
						allRatings={allRatings}
					/>
				</Modal>
			)}
			{isAddedModalOpen && (
				<Modal>
					<MaterialModalAdd handleCloseAddedModal={handleCloseAddedModal} />
				</Modal>
			)}
		</MaterialWrapper>
	);
};

export default MaterialBlock;
