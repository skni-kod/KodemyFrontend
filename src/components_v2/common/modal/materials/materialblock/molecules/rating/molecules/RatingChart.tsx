import { Rating } from 'react-simple-star-rating';

const RatingChart = ({
	starNumber,
	rating,
	allRatings,
}: {
	starNumber: number;
	rating: number;
	allRatings: number;
}) => {
	const greenWidth = `${(rating / allRatings) * 100}%`;
	const redWidth = `${((allRatings - rating) / allRatings) * 100}%`;
	return (
		<div className="flex gap-4 h-6">
			<Rating
				initialValue={starNumber}
				SVGstyle={{ display: 'inline' }}
				size={20}
				allowFraction
				readonly
			/>
			<div className="w-32 h-full flex gap-0 items-center">
				<div className="w-32 h-2 bg-sky-600" style={{ width: greenWidth }} />
				<div className="w-32 h-2 bg-gray-400" style={{ width: redWidth }} />
			</div>
			<span className="text-black2white">{rating}</span>
		</div>
	);
};

export default RatingChart;
