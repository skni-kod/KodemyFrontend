import { FaAngleRight } from 'react-icons/fa6';
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

export default function AddGrade() {
	const [rating, setRating] = useState(0);

	const handleRatingClick = (rate: number) => {
		setRating(rate);
	};

	return (
		<div className="flex w-full flex-col gap-4">
			<div className="flex items-center justify-center">
				<Rating initialValue={rating} SVGstyle={{ display: 'inline' }} size={72} onClick={handleRatingClick} />
			</div>

			<div className="text-center text-gray-500">{rating > 0 && `Kliknięta ocena: ${rating}`}</div>
			<div className="flex items-center justify-end">
				<button className="flex h-9 items-center gap-1 rounded-xl bg-grade px-4 text-lg font-semibold text-gradeText">
					Oceń <FaAngleRight />
				</button>
			</div>
		</div>
	);
}
