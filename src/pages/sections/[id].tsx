import Page from '@/components/layout/Page';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import CategoryBubbleBtns from '@/components/materials/section_page/page_head/CategoryBubbleBtns';
import { pageInitialState } from '@/utils/constant';
import MaterialUserBlock from '@/components/materials/section_page/page_content/MaterialUserBlock';
import ResultCount from '@/components/materials/section_page/page_content/ResultCount';
import SortOrderBtn, {
	MAT_ORDER_OPTIONS,
} from '@/components/materials/section_page/page_content/SortOrderBtn';
import Paginator from '@/components/materials/section_page/page_content/Paginator';
import { useSidebarContext } from '@/contexts/SidebarStateContext';
import DetailsDropDown from '@/components/materials/section_page/page_content/material_dropdown/DetailsDropDown';
import { Pageable } from '@/utils/model/Pageable';
import useMaterialService, { Material } from '@/hooks/services/useMaterialService';
import { useFiltersContext } from '@/contexts/FiltersContext';
import {
	CATEGORY_IDS_PARAM,
	mapForMaterials,
	PAGE_PARAM,
	SIZE_PARAM,
	SORT_DIRECTION_PARAM,
	SORT_PARAM,
} from '@/utils/filters';

export default function SectionsId() {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const id = Number(router.query.id);
	const { menuData } = useSidebarContext();
	const { setFilters } = useFiltersContext();
	const [materials, setMaterials] = useState<Pageable<Material>>(pageInitialState);
	const { getMaterials } = useMaterialService();

	useEffect(() => {
		if (router.query.id) {
			if (!id || isNaN(id) || id <= 0 || !menuData || !menuData.some((data) => data.id === id)) {
				router.push('/404');
				return;
			}
			const filtersParams = mapForMaterials(router.query);
			setFilters(filtersParams);
			(async () => {
				try {
					const sortElement = MAT_ORDER_OPTIONS.find(
						({ field, order }) =>
							field === filtersParams[SORT_PARAM] && order === filtersParams[SORT_DIRECTION_PARAM],
					);
					const categoryIds: number[] | undefined =
						filtersParams[CATEGORY_IDS_PARAM] &&
						(filtersParams[CATEGORY_IDS_PARAM] as string).split(',').map((id) => +id);
					setMaterials(
						await getMaterials({
							size: filtersParams[SIZE_PARAM] ? +filtersParams[SIZE_PARAM] : 20,
							page: filtersParams[PAGE_PARAM] ? +filtersParams[PAGE_PARAM] : 0,
							sort: (sortElement && sortElement.apiKey) || 'createdDate',
							sortDirection: 'DESC',
							searchFields: {
								sectionId: id,
								categoryIds: categoryIds || undefined,
							},
						}),
					);
				} finally {
					setIsLoading(false);
				}
			})();
		}
	}, [id, getMaterials, menuData, router, setFilters]);

	if (isNaN(id) || id <= 0) return null;
	if (!menuData || !menuData.some((data) => data.id === id)) return null;
	if (isLoading) return null;

	return (
		<Page>
			<div>
				<h2 className="w-full text-4xl text-semibold">
					{menuData.find((data) => data.id === id)?.name}
				</h2>
				<div className="w-full pt-5 px-4">
					<CategoryBubbleBtns id={id} />
				</div>
				<div className="py-2">
					<div className="flex justify-between items-center w-full px-4 pt-5">
						<SortOrderBtn />
						<ResultCount value={materials.content.length} />
					</div>
					<div className="flex flex-col gap-6 w-full pt-5">
						{materials.content.map((material, index) => (
							<MaterialUserBlock key={index} data={material}>
								<DetailsDropDown id={material.id} />
							</MaterialUserBlock>
						))}
					</div>
					<div className="flex justify-center w-full pt-6">
						<Paginator page={materials.pageable.pageNumber} total={materials.totalPages} />
					</div>
				</div>
			</div>
		</Page>
	);
}
