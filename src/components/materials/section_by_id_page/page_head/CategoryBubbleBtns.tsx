import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import CategoryBubbleBtn from '@/components/materials/section_by_id_page/page_head/CategoryBubbleBtn';
import { Section } from '@/services/section/types';
import { buildFieldsForURLSearchParam, parseFieldsFromURLSearchParam } from '@/utils/methods';

type CategoryBubbleBtnsProps = {
	sections: Section[];
	activeSectionId: number;
	activesCategoryIds?: number[];
};

export default function CategoryBubbleBtns({ sections, activeSectionId, activesCategoryIds }: CategoryBubbleBtnsProps) {
	const [selectedCategories, setSelectedCategories] = useState<number[]>(activesCategoryIds ?? []);
	const searchParams = useSearchParams();
	const router = useRouter();

	const sectionCategories = () => {
		return sections.find((section) => section.id === activeSectionId)?.categories || [];
	};

	const handleSelect = (id: number) => {
		let updatedCategories: number[] = [];

		setSelectedCategories((prevState) => {
			if (prevState.includes(id)) {
				updatedCategories = prevState.filter((categoryId) => categoryId !== id);
			} else {
				updatedCategories = [...prevState, id];
			}
			return updatedCategories;
		});

		const params = new URLSearchParams(searchParams);
		params.set(
			'fields',
			buildFieldsForURLSearchParam({
				...parseFieldsFromURLSearchParam(params.get('fields')),
				categoryIds: updatedCategories,
			}),
		);
		router.push(`?${params}`);
	};

	return (
		<div className="flex w-full flex-wrap items-center gap-4 text-center text-xl text-secondary">
			{sectionCategories().map(({ id, name }) => (
				<CategoryBubbleBtn
					key={id}
					name={name}
					selected={!!selectedCategories && selectedCategories.includes(id)}
					onClick={() => handleSelect(id)}
				/>
			))}
		</div>
	);
}
