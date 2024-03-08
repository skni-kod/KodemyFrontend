import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import updateSearchParams from '@/utils/createQueryParams';
import { CATEGORY_IDS_PARAM, GRADES_PARAM, PHRASE_PARAM } from '@/utils/filters';
import { useFiltersContext } from '@/contexts/FiltersContext';

export const GRADES_OPTIONS: { label: string; value?: number }[] = [
	{ label: 'Ocena', value: undefined },
	{ label: '2+', value: 2 },
	{ label: '3+', value: 3 },
	{ label: '4+', value: 4 },
	{ label: '5', value: 5 },
];

export default function GradeField({ className }: { className: string }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedGrade, setSelectedGrade] = useState<number>(0);
	const router = useRouter();
	const searchParams = useSearchParams();
	const { filters } = useFiltersContext();

	useEffect(() => {
		setSelectedGrade(filters[GRADES_PARAM] ? filters[GRADES_PARAM] : 0);
	}, [filters]);

	const handleToggle = () => setIsOpen((prev) => !prev);

	const handleGrade = (idx: number) => {
		const newParams = updateSearchParams(searchParams.toString(), {
			[GRADES_PARAM]: idx !== 0 ? idx.toString() : undefined,
		});
		setIsOpen(false);
		router.push(router.pathname + `?${newParams}`);
	};

	return (
		<div className="relative h-inherit">
			<div className={`${className} h-full w-40 cursor-pointer`} onClick={handleToggle}>
				<span className="flex-1">{GRADES_OPTIONS[selectedGrade].label}</span>
				<span className="flex justify-center items-center h-full aspect-square">
					{!isOpen ? <FaAngleDown /> : <FaAngleUp />}
				</span>
			</div>
			{isOpen && (
				<div className="absolute top-full w-full mt-1 bg-bg shadow-md z-10 tracking-wide">
					<ul className="flex flex-col w-full p-3 list-none leading-none">
						{GRADES_OPTIONS.map(({ label }, idx) => (
							<li
								key={idx}
								className="p-2 hover:bg-overlay2bg cursor-pointer"
								onClick={() => handleGrade(idx)}
							>
								{label}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
