import CategoryButton from '@/components/materials/atoms/CategoryButton';
import { Material } from '@/services/CategoryService';
import MaterialBlock from '@/components/materials/molecules/MaterialBlock';
import { CategoryMaterials } from '@/mocks/CategoryMock';
import { RxTriangleDown } from 'react-icons/rx';
import FilterButton from '@/components/materials/atoms/FilterButton';

const MaterialsContent = () => {
	const materials = CategoryMaterials;

	return (
		<>
			<div className="w-full px-3">
				<div className="w-full mt-4 text-semibold text-[36px]">
					GameDev/Unity
				</div>
				<div className="flex items-center w-full gap-4 mt-4 px-4 text-xl text-semibold text-center">
					<CategoryButton value={'Unreal'} />
					<CategoryButton value={'Unity'} selected />
				</div>
				<div className="flex items-center w-full gap-4 mt-4 px-4 text-sm text-semibold text-center">
					<FilterButton value={'Data utworzenia: DESC'} />
				</div>
				<div className="flex justify-between items-center w-full mt-4 px-8">
					<div>
						Znaleziono {materials ? materials.content.length : 0} elementów
					</div>
					<div className="flex items-center text-sky-500 cursor-pointer">
						Filtruj <RxTriangleDown />
					</div>
				</div>
			</div>
			<div className="flex flex-col w-full gap-4 py-4">
				{materials &&
					materials.content.map((material) => (
						<MaterialBlock key={material.id} data={material} />
					))}
			</div>
		</>
	);
};

export default MaterialsContent;
