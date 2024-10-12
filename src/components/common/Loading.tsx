import React from 'react';

interface LoadingProps {
	scale?: 'normal' | 'small' | 'xs';
	full?: boolean;
}

export default function Loading({ scale = 'normal', full: isFull = false }: LoadingProps) {
	const animationTable = ['[animation-delay:-0.3s]', '[animation-delay:-0.15s]', null];

	return (
		<div
			className={`${isFull ? 'absolute inset-0' + ' ' : ''}flex h-full w-full items-center justify-center space-x-2`}
		>
			{animationTable.map((animation, idx) => (
				<div
					key={idx}
					className={`${scale == 'normal' ? 'h-4 w-4' : scale == 'small' ? 'h-3 w-3' : 'h-2 w-2'} animate-bounce rounded-full bg-primary${animation ? ' ' + animation : ''}`}
				></div>
			))}
		</div>
	);
}
