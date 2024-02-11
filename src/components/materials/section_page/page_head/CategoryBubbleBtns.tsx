import { useSidebarContext } from '@/contexts/SidebarStateContext';
import CategoryBubbleBtn from '@/components/materials/section_page/page_head/CategoryBubbleBtn';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import createQueryParams from '@/utils/createQueryParams';

export default function CategoryBubbleBtns({ id }: { id: number }) {
	const { menuData } = useSidebarContext();
	const [selectedCategories, setSelectedCategories] = useState<number[] | null>(null);

	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		const value = searchParams.get('category'); // ?category=1%2C2
		if (value) {
			setSelectedCategories(value.split(',').map((id) => parseInt(id, 10)));
		}
	}, [searchParams]);

	const handleSelect = (id: number) => {
		if (selectedCategories && selectedCategories.includes(id)) return;
		const value = selectedCategories ? [...selectedCategories, id] : [id];
		setSelectedCategories(value);
		router.push(router.pathname + refreshCategoryParam(value.toString()));
	};

	const refreshCategoryParam = useCallback(
		(value: string) => createQueryParams(searchParams.toString(), 'category', value),
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
