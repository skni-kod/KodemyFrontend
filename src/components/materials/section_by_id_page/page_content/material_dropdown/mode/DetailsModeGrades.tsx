import { Rating } from 'react-simple-star-rating';
import React, { useEffect, useState } from 'react';
import MaterialService from '@/services/material/materialService';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { Material } from '@/services/material/types';
import { FaAngleRight } from 'react-icons/fa6';
import AddGradeMaterialModal from '@/components/materials/add_grade_modal/AddGradeMaterialModal';

export default function DetailsModeGrades({ id }: { id: number }) {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const { data: material, status, fetch } = useFetchState<Material>();

	useEffect(() => fetch(() => MaterialService.getMaterialById(id)), [fetch, id]);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !material) return <Error />;

	function between(value: number, min: number, max: number) {
		return value > min && value <= max;
	}

	const getRatingDescription = (grade: number) => {
		switch (true) {
			case grade === 0:
				return 'Brak ocen';
			case between(grade, 0, 1.5):
				return 'Bardzo słaby';
			case between(grade, 1.5, 2.5):
				return 'Słaby';
			case between(grade, 2.5, 3.5):
				return 'Średni';
			case between(grade, 3.5, 4.5):
				return 'Dobry';
			case between(grade, 4.5, 5.0):
				return 'Rewelacyjny';
			default:
				return 'Nieznana ocena';
		}
	};

	const handleMenuAddMaterialClick = () => {
		setIsModalOpen(true);
	};

	return (
		<div className="w-full p-7">
			<h2 className="text-lg font-semibold">Opinie o produkcie</h2>
			<div className="grid grid-cols-1 items-center md:grid-cols-[1fr_2fr]">
				<div className="flex w-full flex-col items-center">
					<h3 className="flex items-center text-lg font-bold">{getRatingDescription(material.averageGrade)}</h3>
					<div className="flex items-center">
						<p className="text-2xl font-bold">{material.averageGrade.toFixed(2)}</p>
						<p className="text-xl">{'/ 5'}</p>
					</div>
				</div>
				<table className="h-full w-full border-black md:border-l-2">
					<tbody>
						{material.gradeStats
							.slice()
							.reverse()
							.map((stat, index) => {
								const totalRatings = material.gradeStats.reduce((acc, curr) => acc + curr, 0);
								const percentage = (stat / totalRatings) * 100;

								return (
									<tr key={index}>
										<td className="pl-4 text-center">
											<h1>{material.gradeStats.length - index}</h1>
										</td>
										<td className="flex px-2">
											<Rating
												initialValue={material.gradeStats.length - index}
												SVGstyle={{ display: 'inline' }}
												size={16}
												allowFraction
												readonly
											/>
										</td>
										<td className="w-full px-4 py-2">
											<div className="relative h-4 w-full rounded bg-gray-200">
												<div
													className="absolute left-0 top-0 h-full rounded bg-grade"
													style={{ width: `${percentage}%` }}
												/>
											</div>
										</td>
										<td className="px-2 text-left">
											<h1>{stat}</h1>
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
			<div className="flex w-full justify-end pt-4">
				<button
					onClick={handleMenuAddMaterialClick}
					className="flex h-9 items-center gap-1 rounded-xl bg-grade px-4 text-lg font-semibold text-gradeText"
				>
					Przejdź <FaAngleRight />
				</button>
				<AddGradeMaterialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} materialId={material.id} />
			</div>
		</div>
	);
}
