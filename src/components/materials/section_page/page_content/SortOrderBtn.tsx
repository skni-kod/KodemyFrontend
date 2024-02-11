import React from 'react';
import { FaAngleDown } from 'react-icons/fa6';

export default function SortOrderBtn() {
	return (
		<div className="relative text-primary">
			<button className="flex items-center font-semibold">
				<span>Sortuj:&nbsp;</span>
				<span>Najnowsze</span>
				<FaAngleDown width={40} height={40} className="ml-1.5" />
			</button>
			<div></div>
		</div>
	);
}
