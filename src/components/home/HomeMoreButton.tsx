import React from 'react';
import { TEXT } from '@/utils/constant';

export default function HomeMoreButton() {
	return (
		<div className="cursor-pointer flex-nowrap">
			<div className="font-semibold tracking-widest text-primary">{TEXT.CHECK_UPPER}</div>
		</div>
	);
}
