import Page from '@/components/layout/Page';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CategoryBubbleBtns from '@/components/materials/section_page/page_head/CategoryBubbleBtns';
import { pageInitialState } from '@/utils/constant';
import MaterialUserBlock from '@/components/materials/section_page/page_content/MaterialUserBlock';
import { getMaterials } from '@/mocks/materialService';
import ResultCount from '@/components/materials/section_page/page_content/ResultCount';
import SortOrderBtn from '@/components/materials/section_page/page_content/SortOrderBtn';
import Paginator from '@/components/materials/section_page/page_content/Paginator';
import { useSidebarContext } from '@/contexts/SidebarStateContext';
import DetailsDropDown from '@/components/materials/section_page/page_content/material_dropdown/DetailsDropDown';
import {Pageable} from "@/utils/model/Pageable";
import {Material} from "@/hooks/services/useMaterialService";

export default function SectionsId() {
	const router = useRouter();
	const id = Number(router.query.id);
	const { menuData } = useSidebarContext();

	useEffect(() => {
		if (router.query.id) {
			if (id || id > 0) return;
			if (menuData && menuData.find((data) => data.id === id)) return;
			router.push('/404');
		}
	}, [id, menuData, router]);

	const [materials, setMaterials] = useState<Pageable<Material>>(pageInitialState);
	/*const { getMaterials } = useMaterialService();

	useEffect(() => {
		(async () => {
			setMaterials(
				await getMaterials({
					size: 20,
					page: 0,
					sort: 'createdDate',
					sortDirection: 'DESC',
					searchFields: {},
				}),
			);
		})();
	}, [id, getMaterials]);*/

	useEffect(() => {
		setMaterials(getMaterials);
	}, []);

	if (isNaN(id) || id <= 0) return null;
	if (!menuData || !menuData.find((data) => data.id === id)) return null;

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
