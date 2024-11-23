import React from 'react';

interface StageDotsProps {
	count: number;
	activeIndex: number;
}

export default function StageDots({ count, activeIndex }: StageDotsProps) {
	return (
		<div>
			<div className="m-1 inline-block text-secondary">
				<span className="h-4">{activeIndex + 1}</span> / <span className="h-4">{count}</span>
			</div>
		</div>
	);
}
