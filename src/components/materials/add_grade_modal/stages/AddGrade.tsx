'use client';
import React from 'react';
import { Rating } from 'react-simple-star-rating';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AddGrade({ rating, onChange }: { rating: number; onChange: (rating: number) => void }) {
	const rwd = useMediaQuery('(min-width:400px)');

	const handleRatingClick = (rate: number) => {
		onChange(rate);
	};

	return (
		<div className="flex w-full flex-col gap-4">
			<div className="flex items-center justify-center">
				<Rating
					initialValue={rating}
					SVGstyle={{ display: 'inline' }}
					size={rwd ? 72 : 52}
					onClick={handleRatingClick}
				/>
			</div>

			<div className="text-center text-secondary">{rating > 0 && `Wybrana ocena: ${rating}`}</div>
		</div>
	);
}
