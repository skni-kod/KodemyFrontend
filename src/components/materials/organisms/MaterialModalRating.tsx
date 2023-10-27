import { AiOutlineClose } from 'react-icons/ai';
import { Rating } from 'react-simple-star-rating';
import RatingChart from '../molecules/RatingChart';
import Title from '@/components/common/Modal/Title';
import CloseCross from '@/components/common/Modal/CloseCross';
import CloseButton from '@/components/common/Modal/CloseButton';

const MaterialModalContent = ({
	handleCloseRatingModal,
	ratingFive,
	ratingFour,
	ratingThree,
	ratingTwo,
	ratingOne,
	allRatings,
}: {
	handleCloseRatingModal: () => void;
	ratingFive: number;
	ratingFour: number;
	ratingThree: number;
	ratingTwo: number;
	ratingOne: number;
	allRatings: number;
}) => {
	return (
		<div className="relative w-128 min-h-112 p-3 bg-white2verydarkgrey rounded-2xl">
			<CloseCross handleCloseCross={handleCloseRatingModal} />
			<div className="px-8 py-1 flex flex-col">
				<Title titletext="Oceny" descriptiontext="Szczegółowe oceny materiału" />
				<RatingChart starNumber={5} rating={ratingFive} allRatings={allRatings} />
				<RatingChart starNumber={4} rating={ratingFour} allRatings={allRatings} />
				<RatingChart starNumber={3} rating={ratingThree} allRatings={allRatings} />
				<RatingChart starNumber={2} rating={ratingTwo} allRatings={allRatings} />
				<RatingChart starNumber={1} rating={ratingOne} allRatings={allRatings} />
				<CloseButton handleCloseButton={handleCloseRatingModal} />
			</div>
		</div>
	);
};

export default MaterialModalContent;
