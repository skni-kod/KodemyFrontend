import React from 'react';
import { SlMagnifier } from 'react-icons/sl';
import { TEXT } from '@/utils/constant';

export default function SearchBlock() {
	return (
		<>
			<div className="flex h-full w-full cursor-pointer flex-row items-center rounded-md border px-[0.75rem] py-[0.33rem] text-lg font-semibold text-secondary">
				<div className="aspect-square h-full">
					<SlMagnifier className="h-full" />
				</div>
				<span className="flex cursor-pointer bg-none">{TEXT.LOOKING_FOR + '...'}</span>
			</div>
		</>
	);
}
