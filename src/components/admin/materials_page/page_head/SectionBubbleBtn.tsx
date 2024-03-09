import clsx from 'clsx';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import React, { useState } from 'react';
import { GRADES_OPTIONS } from '@/components/materials/section_page/page_head/filters/GradeField';
import { Category } from '@/hooks/services/useSectionService';
import updateSearchParams from '@/utils/createQueryParams';
import { CATEGORY_IDS_PARAM } from '@/utils/filters';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useFiltersContext } from '@/contexts/FiltersContext';

type SectionBubbleBtnProps = {
	name: string;
	categories: Category[];
	onClick: () => void;
	isOpen?: boolean;
	selected: number[] | null;
};

export default function SectionBubbleBtn({
	name,
	categories = [],
	onClick,
	isOpen = false,
	selected: selectedCategories,
}: SectionBubbleBtnProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	const handleSelect = (id: number) => {
		const newParams = updateSearchParams(searchParams.toString(), {
			[CATEGORY_IDS_PARAM]: (() => {
				if (selectedCategories && selectedCategories.includes(id)) {
					return selectedCategories.filter((value) => value != id);
				} else {
					return selectedCategories ? [...selectedCategories, id] : [id];
				}
			})().toString(),
		});
		router.push(router.pathname + `?${newParams}`);
	};

	return (
		<div className="relative h-inherit">
			<div
				onClick={onClick}
				className={clsx(
					'flex items-center p-3 shadow-md border-2 rounded-3xl shrink-0 cursor-pointer',
					!isOpen
						? 'border-black2white text-black2white hover:border-gray-500 hover:text-gray-500'
						: 'border-sky-500 text-sky-500',
				)}
			>
				{name}
				{!isOpen ? (
					<FaAngleDown width={40} height={40} className="ml-1.5" />
				) : (
					<FaAngleUp width={40} height={40} className="ml-1.5" />
				)}
			</div>
			{isOpen && (
				<div className="absolute top-full left-1/2 w-[90%] -translate-x-1/2 mt-1 bg-bg shadow-md z-10 tracking-wide">
					<ul className="flex flex-col w-full p-3 list-none leading-none">
						{categories.map(({ id, name }, idx) => (
							<li
								key={idx}
								className="flex items-center gap-2 p-2 text-lg text-left hover:bg-overlay2bg cursor-pointer"
								onClick={() => handleSelect(id)}
							>
								<input
									className="h-inherit accent-primary aspect-square"
									type="checkbox"
									id={`cat_${id}`}
									name={`sec_${name.toUpperCase()}`}
									checked={
										selectedCategories ? selectedCategories.some((value) => value === id) : false
									}
									readOnly
								/>
								<label className="flex-1 h-inherit truncate text-nowrap" htmlFor={`cat_${id}`}>
									{name}
								</label>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
