import { useRouter } from 'next/router';
import MaterialsContent from '@/components/category/MaterialsContent';
import Route from '@/utils/route';
import { useEffect, useState } from 'react';
import useMaterialService, { MaterialOpenSearch } from '@/hooks/services/useMaterialIdService';
import { openSearchBaseInitialState } from '@/utils/constant';
import useFiltersMenu from '@/hooks/useFiltersMenu';

export const pageCategoryIdRoute = (categoryId: number, pageId: number): Route => {
	return {
		pathname: '/category/[categoryId]/page/[pageId]',
		query: { categoryId, pageId },
	};
};

const CategoryPageId = () => {
	const router = useRouter();
	const { pageId } = router.query;
	const { categoryId } = router.query;

	if (pageId === undefined || categoryId === undefined) {
		return <div>Loading...</div>;
	}

	const { getMaterials } = useMaterialService({ currentPage: Number(pageId) });
	const [materials, setMaterials] = useState<MaterialOpenSearch>(openSearchBaseInitialState);
	const { FiltersMenu, isFilterMenuOpen, setIsFilterMenuOpen, filters } = useFiltersMenu();

	useEffect(() => {
		(async () => {
			setMaterials(
				await getMaterials(
					filters({
						page: Number(pageId),
						categoryId: Number(categoryId),
					}),
				),
			);
		})();
	}, [categoryId, getMaterials, filters, pageId]);

	if (materials === undefined) {
		console.error('materials are undefined');
	}

	return (
		<div className="bg-white2darkgrey mt-16">
			<MaterialsContent
				categoryId={Number(categoryId)}
				pageId={Number(pageId)}
				materials={materials}
				FiltersMenu={FiltersMenu}
				isFilterMenuOpen={isFilterMenuOpen}
				setIsFilterMenuOpen={setIsFilterMenuOpen}
				currentPageForButtons={Number(pageId)}
				setCurrentPage={(categoryId, pageId) =>
					router.push(pageCategoryIdRoute(Number(categoryId), Number(pageId)))
				}
			/>
		</div>
	);
};

export default CategoryPageId;
