'use client';
import { TEXT } from '@/utils/constant';
import Link from 'next/link';
import React, { useState } from 'react';
import { SlArrowRightCircle } from 'react-icons/sl';

export default function SearchBar({
	data,
	searchFields,
	onClose,
}: {
	data: any[];
	searchFields: string[];
	onClose: () => void;
}) {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState<any[]>([]);

	const handleSearch = (input: string) => {
		setQuery(input);
		if (input.trim()) {
			const filteredResults = data.filter((item) =>
				searchFields.some((field) => item[field].toString().toLowerCase().includes(input.toLowerCase())),
			);
			setResults(filteredResults);
		} else {
			setResults([]);
		}
	};

	return (
		<div className="flex flex-col gap-4">
			<input
				type="text"
				className="w-full rounded-md border px-4 py-2 transition-all duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-textOnSecondary"
				placeholder={TEXT.LOOKING_FOR + '...'}
				value={query}
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<div className="flex flex-col">
				{results.length > 0 ? (
					results.map((result, index) => (
						<div key={index} className="flex flex-row justify-between border-b p-2 last:border-none hover:bg-gray">
							<div className="flex flex-col gap-2">
								{searchFields.map((field, index) => (
									<span key={field} className={`w-fit text-left ${index === 0 ? 'font-bold' : 'font-normal'}`}>
										{result[field]}
									</span>
								))}
							</div>
							<Link
								href={`/sections/${result['sectionId']}?fields=(id%3A"${result['id']}")`}
								onClick={onClose}
								className="flex w-fit items-center justify-center"
							>
								<SlArrowRightCircle className="size-5"></SlArrowRightCircle>
							</Link>
						</div>
					))
				) : (
					<div className="text-textOnSecondary">{TEXT.NOT_FOUND_ELEMENTS}</div>
				)}
			</div>
		</div>
	);
}
