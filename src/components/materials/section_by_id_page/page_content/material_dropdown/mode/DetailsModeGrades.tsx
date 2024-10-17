import { Rating } from 'react-simple-star-rating';
import React, { useEffect } from 'react';
import MaterialService from '@/services/material/materialService';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { Material } from '@/services/material/types';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

export default function DetailsModeGrades({ id }: { id: number }) {
	const { data: material, status, fetch } = useFetchState<Material>();

	useEffect(() => fetch(() => MaterialService.getMaterialById(id)), [fetch, id]);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !material) return <Error />;

	return (
		<div className="p-7">
			<div className="w-full">
				<h2 className="text-lg font-semibold">Oceny</h2>
				<p className="pt-2">Średnia ocen: {material.averageGrade.toFixed(2)}</p>
			</div>
			<table>
				<tbody>
					{material.gradeStats
						.slice()
						.reverse()
						.map((stat, index) => {
							return (
								<tr key={index}>
									<td className="flex items-center px-4 py-2">
										<Rating
											initialValue={material.gradeStats.length - index}
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
							);
						})}
				</tbody>
			</table>
			<div className="flex w-full justify-end pt-4">
				<Link
					href={material.link}
					className="flex·h-9·items-center·gap-1·rounded-xl·bg-grade·px-4·text-lg·font-semibold·text-gradeText"
				>
					Przejdź <FaAngleRight />
				</Link>
			</div>
		</div>
	);
}
