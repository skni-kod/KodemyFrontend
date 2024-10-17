import React, { useEffect } from 'react';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';
import { Material } from '@/services/material/types';
import MaterialService from '@/services/material/materialService';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';

export default function DetailsModePreview({ id }: { id: number }) {
	const { data: material, status, fetch: fetchMaterial } = useFetchState<Material>();

	useEffect(() => fetchMaterial(() => MaterialService.getMaterialById(id)), [fetchMaterial, id]);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !material) return <Error />;

	return (
		<div className="p-7">
			<div className="w-full">
				<h2 className="text-lg font-semibold">Opis</h2>
				<p className="pt-2">{material.description}</p>
			</div>
			<div className="flex w-full justify-end pt-4">
				<Link
					href={material.link}
					className="flex h-9 items-center gap-1 rounded-xl bg-primary px-4 text-lg font-semibold text-textOnPrimary"
				>
					Przejdź <FaAngleRight />
				</Link>
			</div>
		</div>
	);
}
