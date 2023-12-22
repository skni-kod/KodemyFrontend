import React, { useEffect, useState } from 'react';
import { Material } from '@/hooks/services/useMaterialIdService';
import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';
import Status from '@/components/common/modal/common/Status';
import MaterialWrapper from '@/components/common/page/atoms/MaterialWrapper';
import { Rating } from 'react-simple-star-rating';
import Favourite from './atoms/Favourite';
import Modal from '@/components/common/modal/common/Modal';
import MaterialModalRating from './molecules/rating/MaterialModalRating';
import MaterialModalAdd from './molecules/add/MaterialModalAdd';
import MaterialModalMark from './molecules/mark/MaterialModalMark';
import { fetchMaterialGrades } from '@/hooks/data/fetchGrades';
import { IoIosArrowForward } from 'react-icons/io';

type MaterialProps = {
	data: Material;
	handleOpenModal: (id: number) => void;
	isAddedModalOpen: boolean;
	setIsAddedModalOpen: (value: boolean) => void;
	isRatingModalOpen: boolean;
	setIsRatingModalOpen: (value: boolean) => void;
};

const MaterialBlock = ({
	data: { id, title, description, status, author, createdDate },
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

	const size = null;
	const page = null;

	const [ratingOne, setRatingOne] = useState(0);
	const [ratingTwo, setRatingTwo] = useState(0);
	const [ratingThree, setRatingThree] = useState(0);
	const [ratingFour, setRatingFour] = useState(0);
	const [ratingFive, setRatingFive] = useState(0);
	const [allRatings, setAllRatings] = useState(1);
	const [averageRating, setAverageRating] = useState(0);
	const today = new Date().toISOString().slice(0, 19);

	useEffect(() => {
		async function fetchData() {
			try {
				const materialData = await fetchMaterialGrades(id, createdDate, today, size, page);

				if (materialData) {
					setRatingOne(materialData.ratingOne);
					setRatingTwo(materialData.ratingTwo);
					setRatingThree(materialData.ratingThree);
					setRatingFour(materialData.ratingFour);
					setRatingFive(materialData.ratingFive);
					setAllRatings(
						materialData.ratingOne +
							materialData.ratingTwo +
							materialData.ratingThree +
							materialData.ratingFour +
							materialData.ratingFive,
					);
				} else {
					console.error('materialDataGrade is NULL');
				}
			} catch (error) {
				console.error(error);
			}
		}

		fetchData();
	}, [id, createdDate, today, size, page]);

	return (
		<MaterialWrapper onClick={() => handleOpenModal(id)}>
			<div className="flex justify-start">
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
						<div className="text-sm text-bold">
							{author.username}, {createdDate.split('T')[0]}
						</div>
					</div>
				</div>
			</div>
			<div className="flex justify-end items-center">
				{/* <div className="flex flex-col justify-center w-auto py-5 px-2">
					<Status status={status} />
				</div>*/}
				<div
					className="flex flex-col w-auto min-w-52 min-h-5 h-16 py-5 px-2 border-r-2"
					onClick={openAddedModal}
				>
					<Favourite />
				</div>
				<div className="pl-2">
					<IoIosArrowForward className="text-3xl" />
				</div>
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
