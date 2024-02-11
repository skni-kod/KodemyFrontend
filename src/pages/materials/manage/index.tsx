import Page from '@/components/layout/Page';
import SectionBubbleBtns from '@/components/admin/materials_page/page_head/SectionBubbleBtns';
import { useEffect, useState } from 'react';
import { Material } from '@/hooks/services/useMaterialService';
import { pageInitialState } from '@/utils/constant';
import { getMaterials } from '@/mocks/materialService';
import Paginator from '@/components/materials/section_page/page_content/Paginator';
import DetailsDropDown from '@/components/admin/materials_page/page_content/material_dropdown/DetailsDropDown';
import SortOrderBtn from '@/components/materials/section_page/page_content/SortOrderBtn';
import ResultCount from '@/components/materials/section_page/page_content/ResultCount';
import MaterialUserBlock from '@/components/materials/section_page/page_content/MaterialUserBlock';
import { Pageable } from '@/utils/model/Pageable';

export default function MaterialsManage() {
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

	return (
		<Page>
			<div>
				<h2 className="w-full text-4xl text-semibold">Materiały użytkowników</h2>
				<div className="w-full pt-5 px-4">
					<SectionBubbleBtns />
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
