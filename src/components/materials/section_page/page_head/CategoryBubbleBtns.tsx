import { useSidebarContext } from '@/contexts/SidebarStateContext';
import CategoryBubbleBtn from '@/components/materials/section_page/page_head/CategoryBubbleBtn';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import createQueryParams from '@/utils/createQueryParams';
import { useFiltersContext } from '@/contexts/FiltersContext';
import { CATEGORY_IDS_PARAM } from '@/utils/filters';

export default function CategoryBubbleBtns({ id }: { id: number }) {
	const { menuData } = useSidebarContext();
	const [selectedCategories, setSelectedCategories] = useState<number[] | null>(null);

	const router = useRouter();
	const searchParams = useSearchParams();
	const { filters } = useFiltersContext();

	useEffect(() => {
		if (filters[CATEGORY_IDS_PARAM])
			setSelectedCategories((filters[CATEGORY_IDS_PARAM] as string).split(',').map((id) => +id));
	}, [filters, searchParams]);

	const handleSelect = (id: number) => {
		if (selectedCategories && selectedCategories.includes(id)) return;
		const value = selectedCategories ? [...selectedCategories, id] : [id];
		router.push(router.pathname + refreshCategoryParam(value));
	};

	const refreshCategoryParam = useCallback(
		(value: number[]) =>
			createQueryParams(searchParams.toString(), CATEGORY_IDS_PARAM, value.toString()),
		[searchParams],
	);

	if (!id || !menuData || !menuData[id]) return null;

	return (
		<div className="flex items-center flex-wrap w-full gap-4 text-xl text-semibold text-center">
			{menuData[id].categories.map(({ id, name }) => (
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
