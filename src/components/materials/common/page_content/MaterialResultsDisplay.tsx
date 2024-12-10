'use client';
import React, { useEffect } from 'react';

import Error from '@/components/common/Error';
import Loading from '@/components/common/Loading';
import Paginator from '@/components/common/page_content/Paginator';
import ResultCount from '@/components/common/page_content/sort_and_result/ResultCount';
import SortOrderBtn, {
	MAT_ORDER_OPTIONS,
} from '@/components/materials/common/page_content/sort_and_result/SortOrderBtn';
import MaterialListBlock from '@/components/materials/section_by_id_page/page_content/MaterialListBlock';
import MaterialService from '@/services/material/materialService';
import { MaterialSearch } from '@/services/material/types';
import { Pageable } from '@/utils/api/types';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { MaterialSearchParams } from '@/utils/types';

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
				size: searchParams.size,
				page: searchParams.page,
				sort: MAT_ORDER_OPTIONS[searchParams.sort].field,
				sort_direction: MAT_ORDER_OPTIONS[searchParams.sort].order,
				filters: { ...searchParams.fields },
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
