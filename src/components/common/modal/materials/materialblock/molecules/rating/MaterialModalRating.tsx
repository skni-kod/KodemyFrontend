import RatingChart from './molecules/RatingChart';
import Title from '@/components/common/modal/common/Title';
import CloseCross from '@/components/common/modal/common/CloseCross';
import CloseButton from '@/components/common/modal/common/CloseButton';

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
		<div className="relative w-128 p-3 bg-white2verydarkgrey rounded-2xl ">
			<CloseCross handleCloseCross={handleCloseRatingModal} />
			<div className="px-8 py-1 flex flex-col gap-4 ">
				<Title titletext="Oceny" descriptiontext="Szczegółowe oceny materiału" />
				<div>
					<RatingChart starNumber={5} rating={ratingFive} allRatings={allRatings} />
					<RatingChart starNumber={4} rating={ratingFour} allRatings={allRatings} />
					<RatingChart starNumber={3} rating={ratingThree} allRatings={allRatings} />
					<RatingChart starNumber={2} rating={ratingTwo} allRatings={allRatings} />
					<RatingChart starNumber={1} rating={ratingOne} allRatings={allRatings} />
				</div>
			</div>
			<CloseButton handleCloseButton={handleCloseRatingModal} />
		</div>
	);
};

export default MaterialModalContent;
