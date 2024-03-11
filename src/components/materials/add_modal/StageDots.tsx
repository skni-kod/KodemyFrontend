import React from 'react';

interface StageDotsProps {
	count: number;
	activeIndex: number;
}

export default function StageDots({ count, activeIndex }: StageDotsProps) {
	return (
		<div>
			{[...Array(count)].map((_, idx) => (
				<div key={idx} className="inline-block m-1">
					<div
						className={`${idx === activeIndex ? 'w-6' : 'w-4'} h-4 rounded-full bg-gray-500`}
					></div>
				</div>
			))}
		</div>
	);
}
