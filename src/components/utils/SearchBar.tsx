'use client';
import React, { useState } from 'react';

export default function SearchBar({ data, searchFields }: { data: any[]; searchFields: string[] }) {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState<any[]>([]);

	// Obsługa wyszukiwania
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
		<div className="w-full">
			<input
				type="text"
				className="w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
				placeholder="Search..."
				value={query}
				onChange={(e) => handleSearch(e.target.value)}
			/>

			<div className="mt-4 max-h-64 overflow-y-auto">
				{results.length > 0 ? (
					results.map((result, index) => (
						<div key={index} className="hover:bg-gray-100 cursor-pointer border-b p-2 last:border-none">
							{searchFields.map((field) => (
								<span key={field} className="flex flex-row">
									{result[field]}
								</span>
							))}
						</div>
					))
				) : (
					<div className="text-gray-500">No results found</div>
				)}
			</div>
		</div>
	);
}
