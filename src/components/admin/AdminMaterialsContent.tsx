import { CategoryMaterials } from '@/mocks/categoryMock';
import { useState } from 'react';
import MaterialManagementButtons from './molecules/MaterialManagementButtons';
import HeaderAllMaterials from '@/components/common/page/organisms/HeaderAllMaterials';
import ResultCount from '@/components/common/page/atoms/ResultCount';
import SortMenuButton from '@/components/materials/organisms/SortMenuButton';
import FilterMenuButton from '@/components/common/page/atoms/FilterMenuButton';
import FiltersMenu from '@/components/common/page/organisms/FiltersMenu';

const AdminMaterialsContent = () => {
	const materials = CategoryMaterials;
	const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

	return (
		<>
			<div className="w-full px-3 text-black2white">
				<HeaderAllMaterials headName="Statusy materiałów" />
				<div className="flex justify-between items-center w-full pt-4 px-8">
					<ResultCount value={materials.content.length} />
					<div className="relative flex gap-x-8 text-black2white cursor-pointer">
						{!isFilterMenuOpen && <SortMenuButton />}
						<FilterMenuButton isMenuOpen={isFilterMenuOpen} setIsMenuOpen={setIsFilterMenuOpen} />
					</div>
				</div>
			</div>
			<div className="w-full px-3 text-black2white">{isFilterMenuOpen && <FiltersMenu />}</div>
			<div className="flex flex-col w-full gap-4 pt-6 pb-4">
				{materials &&
					materials.content.map((material) => (
						<MaterialManagementButtons key={material.id} data={material} />
					))}
			</div>
		</>
	);
};
export default AdminMaterialsContent;
