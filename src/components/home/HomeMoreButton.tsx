import React from 'react';

import { TEXT } from '@/utils/constant';

export default function HomeMoreButton() {
	return (
		<div className="group relative w-fit cursor-pointer flex-nowrap">
			<div className="font-semibold tracking-widest text-primary">{TEXT.CHECK_UPPER}</div>
			<div className="absolute bottom-0 left-0 right-0 h-0.5 origin-center scale-x-0 bg-primary transition-all duration-500 group-hover:scale-x-100"></div>
		</div>
	);
}
