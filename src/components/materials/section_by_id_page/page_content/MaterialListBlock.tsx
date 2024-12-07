import React from 'react';

import MaterialListItem from '@/components/materials/section_by_id_page/page_content/MaterialListItem';
import { MaterialSearch } from '@/services/material/types';

export default function MaterialListBlock({
	materials,
	DetailsDropDownComponentProp,
}: {
	materials: MaterialSearch[];
	DetailsDropDownComponentProp: React.ComponentType<{ id: number }>;
}) {
	return (
		<div className="flex w-full flex-col gap-6 pt-5">
			{materials.length > 0 ? (
				<>
					{materials.map((material, index) => (
						<MaterialListItem key={index} data={material}>
							<DetailsDropDownComponentProp id={material.id} />
						</MaterialListItem>
					))}
				</>
			) : (
				<div className="w-full pt-2.5 text-center">Nie znaleziono elementów</div>
			)}
		</div>
	);
}
