'use client';
import React, { useState } from 'react';
import { SlMagnifier } from 'react-icons/sl';
import Modal from '@/components/utils/Modal';
import SearchBar from '@/components/utils/SearchBar';
import { TEXT } from '@/utils/constant';

export default function SearchBlock() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);

	const data = [
		{ name: 'aa', test: 'bb' },
		{ name: 'aa', test: 'bb' },
		{ name: 'aa', test: 'bb' },
		{ name: 'y123', test: 'ale nie?' },
		{ name: 'y123', test: 'ale j co nie?' },
		{ name: 'y123', test: 'aljca co nie?' },
		{ name: 'y123', test: 'dfgfdgaca co nie?' },
		{ name: 'y123', test: 'aljdfg dfg o nie?' },
		{ name: 'y123', test: 'ale jajca co nie?' },
		{ name: 'aa', test: 'bb' },
		{ name: 'y123', test: 'ale jajca co nie?' },
	];
	const searchFields = ['name', 'test'];

	return (
		<>
			<div
				className="flex h-full w-full cursor-pointer flex-row items-center rounded-md border px-4 py-2 text-lg font-semibold text-secondary"
				onClick={openModal}
			>
				<div className="aspect-square h-full">
					<SlMagnifier className="h-full" />
				</div>
				<span className="ml-2">{TEXT.LOOKING_FOR + '...'}</span>
			</div>

			{isOpen && (
				<Modal
					onClose={closeModal}
					className="h-2/3 w-2/3 overflow-y-auto border-2 border-primary bg-secondary text-textOnSecondary"
				>
					<div className="flex flex-col gap-4">
						<h2 className="text-lg font-semibold">{TEXT.WHAT_LOOKING_FOR}</h2>
						<SearchBar data={data} searchFields={searchFields} />
					</div>
				</Modal>
			)}
		</>
	);
}
