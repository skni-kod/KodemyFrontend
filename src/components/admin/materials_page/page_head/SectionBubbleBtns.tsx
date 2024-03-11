import { useSidebarContext } from '@/contexts/SidebarStateContext';
import SectionBubbleBtn from '@/components/admin/materials_page/page_head/SectionBubbleBtn';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useFiltersContext } from '@/contexts/FiltersContext';
import { CATEGORY_IDS_PARAM } from '@/utils/filters';
import updateSearchParams from '@/utils/createQueryParams';

export default function SectionBubbleBtns() {
	const { sections } = useSidebarContext();
	const [openSection, setOpenSection] = useState<number | null>(null);
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

	if (!sections) return null;

	return (
		<div className="flex items-center flex-wrap w-full gap-4 text-xl text-semibold text-center">
			{sections.map(({ id, name, categories }) => (
				<SectionBubbleBtn
					key={id}
					name={name}
					categories={categories}
					onClick={() => setOpenSection(id)}
					isOpen={!!(openSection && openSection === id)}
					selected={selectedCategories}
				/>
			))}
		</div>
	);
}
