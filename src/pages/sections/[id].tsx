import Page from '@/components/layout/Page';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CategoryBubbleBtns from '@/components/materials/section_page/page_head/CategoryBubbleBtns';
import { pageInitialState } from '@/utils/constant';
import MaterialUserBlock from '@/components/materials/section_page/page_content/MaterialUserBlock';
import ResultCount from '@/components/materials/section_page/page_content/sort_and_result/ResultCount';
import SortOrderBtn, {
	MAT_ORDER_OPTIONS,
} from '@/components/materials/section_page/page_content/sort_and_result/SortOrderBtn';
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
	PHRASE_PARAM,
	SIZE_PARAM,
	SORT_DIRECTION_PARAM,
	SORT_PARAM,
} from '@/utils/filters';
import FiltersForm from '@/components/materials/section_page/page_head/FiltersForm';
import FiltersBlock from '@/components/materials/section_page/page_head/FiltersBlock';
import PaginationBlock from '@/components/materials/section_page/page_content/PaginationBlock';
import SortAndResultBlock from '@/components/materials/section_page/page_content/SortAndResultBlock';
import PageHeader from '@/components/materials/section_page/page_content/PageHeader';
import ManageDetailsDropDown from '@/components/admin/materials_page/page_content/material_dropdown/ManageDetailsDropDown';
import MaterialListBlock from '@/components/materials/section_page/page_content/MaterialListBlock';
import BubbleBtnsBlock from '@/components/materials/section_page/page_content/BubbleBtnsBlock';
import Head from 'next/head';
import { generateTitle } from '../_app';

export default function SectionsId() {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const id = Number(router.query.id);
	const { sections } = useSidebarContext();
	const { setFilters } = useFiltersContext();
	const [materials, setMaterials] = useState<Pageable<Material>>(pageInitialState);
	const { getMaterials } = useMaterialService();

	useEffect(() => {
		if (router.query.id) {
			if (!id || isNaN(id) || id <= 0 || !sections || !sections.some((data) => data.id === id)) {
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
							sort: (sortElement && sortElement.apiField) || 'createdDate',
							sortDirection: 'DESC',
							searchFields: {
								sectionId: id,
								categoryIds: categoryIds || undefined,
								phrase: filtersParams[PHRASE_PARAM] || undefined,
							},
						}),
					);
				} finally {
					setIsLoading(false);
				}
			})();
		}
	}, [id, getMaterials, sections, router, setFilters]);

	if (isNaN(id) || id <= 0) return null;
	if (!sections || !sections.some((data) => data.id === id)) return null;
	if (isLoading) return null;

	return (
		<Page>
			<Head>
				<title>{generateTitle(sections.find((data) => data.id === id)?.name)}</title>
			</Head>
			<div>
				<PageHeader title={sections.find((data) => data.id === id)?.name} />
				<BubbleBtnsBlock>
					<CategoryBubbleBtns id={id} />
				</BubbleBtnsBlock>
				<FiltersBlock>
					<FiltersForm />
				</FiltersBlock>
				<div className="py-2">
					<SortAndResultBlock resultCount={materials.content.length} />
					<MaterialListBlock
						materials={materials.content}
						DetailsDropDownComponent={DetailsDropDown}
					/>
					<PaginationBlock
						pageNumber={materials.pageable.pageNumber}
						totalPages={materials.totalPages}
					/>
				</div>
			</div>
		</Page>
	);
}
