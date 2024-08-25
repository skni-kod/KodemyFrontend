import CategoryBubbleBtn from '@/components/materials/section_by_id_page/page_head/CategoryBubbleBtn';
import { useState } from 'react';
import { Section } from '@/services/section/types';
import { useRouter, useSearchParams } from 'next/navigation';
import { MaterialFields } from '@/utils/types/materialSearchParams';

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
		let categoryIds: number[] = [];
		setSelectedCategories((prevState) => {
			categoryIds = prevState.includes(id) ? [...prevState] : [...prevState, id];
			return categoryIds;
		});
		const params = new URLSearchParams(searchParams);
		const fields: MaterialFields = {
			...JSON.parse(params.get('fields') ?? '{}'),
			categoryIds,
		};
		params.set('fields', JSON.stringify(fields));
		router.push(`?${params}`);
	};

	return (
		<div className="text-semibold flex w-full flex-wrap items-center gap-4 text-center text-xl">
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
