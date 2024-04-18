import Page from '@/components/layout/Page';
import SectionBubbleBtns from '@/components/admin/materials_page/page_head/SectionBubbleBtns';
import React, { useEffect, useState } from 'react';
import useMaterialService, { Material } from '@/hooks/services/useMaterialService';
import { pageInitialState } from '@/utils/constant';
import Paginator from '@/components/materials/section_page/page_content/Paginator';
import ManageDetailsDropDown from '@/components/admin/materials_page/page_content/material_dropdown/ManageDetailsDropDown';
import SortOrderBtn, {
	MAT_ORDER_OPTIONS,
} from '@/components/materials/section_page/page_content/sort_and_result/SortOrderBtn';
import ResultCount from '@/components/materials/section_page/page_content/sort_and_result/ResultCount';
import MaterialUserBlock from '@/components/materials/section_page/page_content/MaterialUserBlock';
import { Pageable } from '@/utils/model/Pageable';
import { useRouter } from 'next/router';
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
import ManageFiltersForm from '@/components/admin/materials_page/page_head/ManageFiltersForm';
import FiltersBlock from '@/components/materials/section_page/page_head/FiltersBlock';
import PaginationBlock from '@/components/materials/section_page/page_content/PaginationBlock';
import SortAndResultBlock from '@/components/materials/section_page/page_content/SortAndResultBlock';
import PageHeader from '@/components/materials/section_page/page_content/PageHeader';
import MaterialListBlock from '@/components/materials/section_page/page_content/MaterialListBlock';
import BubbleBtnsBlock from '@/components/materials/section_page/page_content/BubbleBtnsBlock';
import Head from 'next/head';
import { generateTitle } from '@/pages/_app';

export default function MaterialsManage() {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();
	const { setFilters } = useFiltersContext();
	const [materials, setMaterials] = useState<Pageable<Material>>(pageInitialState);
	const { getMaterials } = useMaterialService();

	useEffect(() => {
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
							phrase: filtersParams[PHRASE_PARAM] || undefined,
						},
					}),
				);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [router.query, getMaterials, setFilters]);

	if (isLoading) return null;

	return (
		<Page>
			<Head>
				<title>{generateTitle("Materiały użytkowników")}</title>
			</Head>
			<div>
				<PageHeader title="Materiały użytkowników" />
				<BubbleBtnsBlock>
					<SectionBubbleBtns />
				</BubbleBtnsBlock>
				<FiltersBlock>
					<ManageFiltersForm />
				</FiltersBlock>
				<div className="py-2">
					<SortAndResultBlock resultCount={materials.content.length} />
					<MaterialListBlock
						materials={materials.content}
						DetailsDropDownComponent={ManageDetailsDropDown}
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
