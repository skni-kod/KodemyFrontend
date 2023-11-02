import HeaderButton from '@/components/common/page/atoms/HeaderButton';
import { useEffect, useState } from 'react';
import { Section } from '@/hooks/services/useSectionService';
import { useSectionsStore } from '@/store/sectionsSlice';
import useCategoryService, { CategoryDetailsResponse } from '@/hooks/services/useCategoryService';
import { pageCategoryIdRoute } from '@/pages/category/[id]';
import { useRouter } from 'next/router';
import FilterButtonsList from '@/components/common/page/molecules/FilterButtonsList';

const Header = ({ categoryId }: { categoryId: number }) => {
	const router = useRouter();
	const { sections } = useSectionsStore();
	const [section, setSection] = useState<Section>();

	const { getCategoryDetails } = useCategoryService();
	const [categoryDetails, setCategoryDetails] = useState<CategoryDetailsResponse>();

	useEffect(() => {
		setSection(sections.find((s: Section) => s.id === categoryDetails?.section.id));
	}, [sections, categoryDetails]);

	useEffect(() => {
		(async () => {
			setCategoryDetails(await getCategoryDetails(categoryId));
		})();
	}, [categoryId, getCategoryDetails]);

	return (
		<>
			<h2 className="w-full mt-4 text-semibold text-[36px]">
				{categoryDetails && <>{categoryDetails.section.name}</>}
			</h2>
			<div className="flex items-center flex-wrap sw-full gap-4 pt-4 px-4 text-xl text-semibold text-center">
				{section?.categories &&
					section.categories.map(({ id, name }) => (
						<HeaderButton
							name={name}
							key={id}
							selected={id === categoryDetails?.id}
							onClick={() => router.push(pageCategoryIdRoute(id))}
						/>
					))}
			</div>
			<FilterButtonsList />
		</>
	);
};

export default Header;
