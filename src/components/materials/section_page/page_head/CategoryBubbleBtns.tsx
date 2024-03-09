import { useSidebarContext } from '@/contexts/SidebarStateContext';
import CategoryBubbleBtn from '@/components/materials/section_page/page_head/CategoryBubbleBtn';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useFiltersContext } from '@/contexts/FiltersContext';
import { CATEGORY_IDS_PARAM } from '@/utils/filters';
import updateSearchParams from '@/utils/createQueryParams';

export default function CategoryBubbleBtns({ id }: { id: number }) {
	const { menuData } = useSidebarContext();
	const [selectedCategories, setSelectedCategories] = useState<number[] | null>(null);

	const router = useRouter();
	const searchParams = useSearchParams();
	const { filters } = useFiltersContext();

	useEffect(() => {
		setSelectedCategories(
			filters[CATEGORY_IDS_PARAM]
				? (filters[CATEGORY_IDS_PARAM] as string).split(',').map((id) => +id)
				: null,
		);
	}, [filters]);

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
