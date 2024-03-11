import React from 'react';

export default function FiltersBlock({ children }: { children: React.ReactNode }) {
	return (
		<div className="w-full pt-6 px-4">
			<h3 className="w-full text-2xl pb-5">Czego szukasz?</h3>
			{children}
		</div>
	);
}
