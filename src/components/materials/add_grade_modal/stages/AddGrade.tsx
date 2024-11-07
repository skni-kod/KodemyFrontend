import React from 'react';
import { Rating } from 'react-simple-star-rating';

export default function AddGrade({ rating, onChange }: { rating: number; onChange: (rating: number) => void }) {
	const handleRatingClick = (rate: number) => {
		onChange(rate);
	};

	return (
		<div className="flex w-full flex-col gap-4">
			<div className="flex items-center justify-center">
				<Rating initialValue={rating} SVGstyle={{ display: 'inline' }} size={72} onClick={handleRatingClick} />
			</div>

			<div className="text-center text-gray-500">{rating > 0 && `Wybrana ocena: ${rating}`}</div>
		</div>
	);
}
