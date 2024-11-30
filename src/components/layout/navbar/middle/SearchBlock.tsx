import React from 'react';
import { SlMagnifier } from 'react-icons/sl';
import { TEXT } from '@/utils/constant';
import SearchBar from '@/components/utils/SearchBar';

export default function SearchBlock() {
	const data = [
		{ name: 'aa', test: 'bb' },
		{ name: 'y123', test: 'ale jajca co nie?' },
	];
	const searchFields = ['name', 'test'];

	return (
		<>
			<div className="flex h-full w-full cursor-pointer flex-row items-center rounded-md border px-[0.75rem] py-[0.33rem] text-lg font-semibold text-secondary">
				<div className="aspect-square h-full">
					<SlMagnifier className="h-full" />
				</div>
				<span className="flex cursor-pointer bg-none">{TEXT.LOOKING_FOR + '...'}</span>
				<SearchBar data={data} searchFields={searchFields} />
			</div>
		</>
	);
}
