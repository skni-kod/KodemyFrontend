import { Rating } from 'react-simple-star-rating';
import React, { useEffect, useState } from 'react';
import useMaterialService, { Material } from '@/hooks/services/useMaterialService';

export default function DetailsModeGrades({ id }: { id: number }) {
	const [isLoading, setIsLoading] = useState(true);
	const [materialPreview, setMaterialPreview] = useState<Material | null>(null);
	const { getMaterialById } = useMaterialService();

	useEffect(() => {
		(async () => {
			try {
				setMaterialPreview(await getMaterialById(id));
			} finally {
				setIsLoading(false);
			}
		})();
	}, [id, getMaterialById]);

	if (!materialPreview) return null;
	if (isLoading) return null;
	return (
		<div className="p-7">
			<div className="w-full">
				<h2 className="text-lg font-semibold">Oceny</h2>
				<p className="pt-2">Średnia ocen: {materialPreview.averageGrade.toFixed(3)}</p>
			</div>
			<table>
				<tbody>
					{materialPreview.gradeStats.map((stat, index) => (
						<tr className="border-b" key={index}>
							<td className="px-4 py-2 flex items-center">
								<Rating
									initialValue={materialPreview.gradeStats.length - index}
									SVGstyle={{ display: 'inline' }}
									size={16}
									allowFraction
									readonly
								/>
							</td>
							<td className="px-4 py-2">
								<h1>{stat}</h1>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
