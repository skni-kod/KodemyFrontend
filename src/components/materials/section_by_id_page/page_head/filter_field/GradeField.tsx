'use client';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { MaterialFields } from '@/utils/types/materialSearchParams';
import { buildFieldsForURLSearchParam, isHasText, parseFieldsFromURLSearchParam } from '@/utils/methods';

type GradeFieldProps = {
	className: string;
	activeGrade?: number;
};

export const GRADES_OPTIONS: { label: string; value?: number }[] = [
	{ label: 'Ocena', value: undefined },
	{ label: '2+', value: 2 },
	{ label: '3+', value: 3 },
	{ label: '4+', value: 4 },
	{ label: '5', value: 5 },
];

export default function GradeField({ className, activeGrade }: GradeFieldProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedGrade, setSelectedGrade] = useState<number>(activeGrade ?? 0);
	const searchParams = useSearchParams();
	const router = useRouter();

	const handleToggle = () => setIsOpen((prevState) => !prevState);

	const handleGrade = (idx: number) => {
		setSelectedGrade((prevState) => (prevState == idx ? 0 : idx));
		const params = new URLSearchParams(searchParams);
		params.set(
			'fields',
			buildFieldsForURLSearchParam({
				...parseFieldsFromURLSearchParam(params.get('fields')),
				grade: idx,
			}),
		);
		router.push(`?${params}`);
	};

	return (
		<div className="relative h-inherit">
			<div className={`${className} h-full w-40 cursor-pointer`} onClick={handleToggle}>
				<span className="flex-1">{GRADES_OPTIONS[selectedGrade].label}</span>
				<span className="flex aspect-square h-full items-center justify-center">
					{!isOpen ? <FaAngleDown /> : <FaAngleUp />}
				</span>
			</div>
			{isOpen && (
				<div className="absolute top-full z-10 mt-1 w-full bg-bg tracking-wide shadow-md">
					<ul className="flex w-full list-none flex-col p-3 leading-none">
						{GRADES_OPTIONS.map(({ label }, idx) => (
							<li key={idx} className="cursor-pointer p-2" onClick={() => handleGrade(idx)}>
								{label}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
