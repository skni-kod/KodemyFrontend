import Title from '@/components/common/modal/common/UserCardTitle';
import CloseCross from '@/components/common/modal/common/CloseCross';
import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';

const MaterialModalMark = ({ handleCloseMarkModal }: { handleCloseMarkModal: () => void }) => {
	const [rating, setRating] = useState(1);

	const handleRatingChange = (newRating: number) => {
		const calculatedRating = newRating;
		setRating(calculatedRating);
	};

	return (
		<div className="relative w-128 p-3 bg-white2verydarkgrey rounded-2xl">
			<CloseCross handleCloseCross={handleCloseMarkModal} />
			<div className="px-8 py-1 flex flex-col gap-4">
				<Title titletext="Ocenianie" descriptiontext="Oceń materiał" />
				<div className="flex justify-center">
					<Rating
						initialValue={rating}
						onClick={handleRatingChange}
						SVGstyle={{ display: 'inline' }}
						size={60}
						allowFraction={false}
					/>
				</div>
				<div className="flex justify-center text-black2white">
					<span>Twoja ocena: {rating}</span>
				</div>
			</div>
			<div className="relative bottom-0 left-0 flex justify-center w-full pb-3 pt-11">
				<button
					className="bg-yellow-400 hover:bg-yellow-500 text-black text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded"
					onClick={() => handleCloseMarkModal()}
				>
					Wyślij ocenę
				</button>
			</div>
		</div>
	);
};

export default MaterialModalMark;
