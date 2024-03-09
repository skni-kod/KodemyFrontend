import Page from '@/components/layout/Page';
import SectionBubbleBtns from '@/components/admin/materials_page/page_head/SectionBubbleBtns';
import React, { useEffect, useState } from 'react';
import useMaterialService, { Material } from '@/hooks/services/useMaterialService';
import { pageInitialState } from '@/utils/constant';
import Paginator from '@/components/materials/section_page/page_content/Paginator';
import DetailsDropDown from '@/components/admin/materials_page/page_content/material_dropdown/DetailsDropDown';
import SortOrderBtn, {
	MAT_ORDER_OPTIONS,
} from '@/components/materials/section_page/page_content/SortOrderBtn';
import ResultCount from '@/components/materials/section_page/page_content/ResultCount';
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
import AdminFilterForm from '@/components/admin/materials_page/page_head/AdminFilterForm';

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
			<div>
				<h2 className="w-full text-4xl text-semibold">Materiały użytkowników</h2>
				<div className="w-full pt-5 px-4">
					<SectionBubbleBtns />
				</div>
				<div className="w-full pt-6 px-4">
					<h3 className="w-full text-2xl pb-5">Czego szukasz?</h3>
					<AdminFilterForm />
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
