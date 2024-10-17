import React, { useState } from 'react';
import { Material } from '@/hooks/services/useMaterialService';
import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';
import Status from '@/components_v2/common/modal/common/Status';
import MaterialWrapper from '@/components_v2/common/page/atoms/MaterialWrapper';
import { Rating } from 'react-simple-star-rating';
import Favourite from './atoms/Favourite';
import Modal from '@/components_v2/common/modal/common/Modal';
import MaterialModalRating from './molecules/rating/MaterialModalRating';
import MaterialModalAdd from './molecules/add/MaterialModalAdd';
import MaterialModalMark from './molecules/mark/MaterialModalMark';

type MaterialProps = {
	data: Material;
	handleOpenModal: (id: number) => void;
	isAddedModalOpen: boolean;
	setIsAddedModalOpen: (value: boolean) => void;
	isRatingModalOpen: boolean;
	setIsRatingModalOpen: (value: boolean) => void;
	isMarkModalOpen: boolean;
	setIsMarkModalOpen: (value: boolean) => void;
};

const MaterialBlock = ({
	data: { id, title, description, status, author, createdDate },
	handleOpenModal,
	isAddedModalOpen,
	setIsAddedModalOpen,
	isRatingModalOpen,
	setIsRatingModalOpen,
	isMarkModalOpen,
	setIsMarkModalOpen,
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

	const openMarkModal = () => {
		setIsMarkModalOpen(true);
	};

	const handleCloseMarkModal = () => {
		setIsMarkModalOpen(false);
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
			{/* To będzie do wyrzucania jak będzie wyświetlało materiały tylko z statusem „APPROVED”  */}
			{/* ten div u dołu  */}
			<div className="flex flex-col justify-center w-auto py-5 px-2">
				<Status status={status} />
			</div>
			{/* ten div u góry */}
			<div className="flex flex-col justify-center w-auto py-5 px-2" onClick={openMarkModal}>
				<button
					className="text-black bg-yellow-400 rounded-lg px-3 py-0.5"
					title="Usuń z ulubionych"
				>
					Oceń
				</button>
			</div>
			<div
				className="flex flex-col justify-center w-auto min-w-52 min-h-5 h-16 py-5 px-2 border-l-2"
				onClick={openAddedModal}
			>
				<Favourite />
			</div>
			<div className="flex flex-col justify-center w-52 min-w-52 min-h-5 h-16 pl-5 py-2 gap-1 border-l-2 text-xs">
				<div>Dodane przez: {author}</div>
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
			{isMarkModalOpen && (
				<Modal>
					<MaterialModalMark handleCloseMarkModal={handleCloseMarkModal} />
				</Modal>
			)}
		</MaterialWrapper>
	);
};

export default MaterialBlock;
