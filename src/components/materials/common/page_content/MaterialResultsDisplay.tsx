'use client';
import React, { useEffect } from 'react';
import SortOrderBtn, {
	MAT_ORDER_OPTIONS,
} from '@/components/materials/common/page_content/sort_and_result/SortOrderBtn';
import ResultCount from '@/components/common/page_content/sort_and_result/ResultCount';
import MaterialListBlock from '@/components/materials/section_by_id_page/page_content/MaterialListBlock';
import Paginator from '@/components/common/page_content/Paginator';
import { MaterialSearchParams } from '@/utils/types';
import MaterialService from '@/services/material/materialService';
import { Pageable } from '@/utils/api/types';
import { MaterialSearch } from '@/services/material/types';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { MATERIAL_PAGE_SIZE, MATERIAL_PAGE_SORT, MATERIAL_PAGE_SORT_DIRECTION } from '@/utils/constant';

interface MaterialResultsDisplayProps {
	searchParams: MaterialSearchParams;
	DetailsDropDownComponent: React.ComponentType<{ id: number }>;
}

export default function MaterialResultsDisplay({
	searchParams,
	DetailsDropDownComponent,
}: MaterialResultsDisplayProps) {
	const { data: materials, status, fetch: fetchMaterials } = useFetchState<Pageable<MaterialSearch>>();

	useEffect(() => {
		fetchMaterials(() => {
			return MaterialService.getMaterials({
				size: searchParams.size ?? MATERIAL_PAGE_SIZE,
				page: searchParams.page ?? 0,
				sort: searchParams.sort ? MAT_ORDER_OPTIONS[searchParams.sort].field : MATERIAL_PAGE_SORT,
				sort_direction: searchParams.sort ? MAT_ORDER_OPTIONS[searchParams.sort].order : MATERIAL_PAGE_SORT_DIRECTION,
				filters: searchParams.fields,
			});
		});
	}, [fetchMaterials, searchParams]);

	if (status === Status.PENDING)
		return (
			<div className="pt-8">
				<Loading scale="small" />
			</div>
		);
	if (status === Status.ERROR || !materials) return <Error />;

	return (
		<div className="py-2">
			<div className="flex w-full items-center justify-between px-4 pt-5">
				<SortOrderBtn activeSort={searchParams.sort} />
				<ResultCount value={materials.content.length} />
			</div>
			<MaterialListBlock materials={materials.content} DetailsDropDownComponentProp={DetailsDropDownComponent} />
			<div className="flex w-full justify-center pt-6">
				<Paginator page={materials.pageable.pageNumber + 1} total={materials.totalPages} />
			</div>
		</div>
	);
}
