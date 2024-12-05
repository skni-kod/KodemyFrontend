'use client';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type GradeFieldProps = {
	className: string;
	activeSort?: number;
};

export const SORT_OPTIONS: { label: string; value: number }[] = [
	{ label: 'Data', value: 0 },
	{ label: 'Ocena', value: 1 },
];

export default function MaterialSort({ className, activeSort }: GradeFieldProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedSort, setSelectedSort] = useState<number>(activeSort ?? 0);
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		if (activeSort !== undefined) {
			setSelectedSort(activeSort);
		}
	}, [activeSort]);

	const handleToggle = () => setIsOpen(!isOpen);

	const handleSortChange = (value: number) => {
		setSelectedSort(value);
		const params = new URLSearchParams(searchParams);

		const field = value === 0 ? 'CREATED_DATE' : 'AVG_GRADE';
		params.set('sortField', field);

		router.push(`?${params}`);
	};

	return (
		<div className="relative h-inherit">
			<div className={`${className} h-full w-40 cursor-pointer`} onClick={handleToggle}>
				<span className="flex-1">{SORT_OPTIONS[selectedSort]?.label || 'Sortuj według'}</span>
				<span className="flex aspect-square h-full items-center justify-center">
					{isOpen ? <FaAngleUp /> : <FaAngleDown />}
				</span>
			</div>
			{isOpen && (
				<div className="absolute top-full z-10 mt-1 w-full bg-bg tracking-wide shadow-md">
					<ul className="flex w-full list-none flex-col p-3 leading-none">
						{SORT_OPTIONS.map(({ label, value }, idx) => (
							<li key={idx} className="cursor-pointer p-2" onClick={() => handleSortChange(value)}>
								{label}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
