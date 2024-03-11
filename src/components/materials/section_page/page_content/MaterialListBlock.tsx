import MaterialUserBlock from '@/components/materials/section_page/page_content/MaterialUserBlock';
import React from 'react';
import { Material } from '@/hooks/services/useMaterialService';

export default function MaterialListBlock({
	materials,
	DetailsDropDownComponent,
}: {
	materials: Material[];
	DetailsDropDownComponent: React.ComponentType<{ id: number }>;
}) {
	return (
		<div className="flex flex-col gap-6 w-full pt-5">
			{materials.map((material, index) => (
				<MaterialUserBlock key={index} data={material}>
					<DetailsDropDownComponent id={material.id} />
				</MaterialUserBlock>
			))}
		</div>
	);
}
