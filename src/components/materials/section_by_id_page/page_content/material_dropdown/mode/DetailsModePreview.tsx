import React, { useEffect } from 'react';
import { FaAngleRight } from 'react-icons/fa6';
import Link from 'next/link';

import Error from '@/components/common/Error';
import Loading from '@/components/common/Loading';
import { MaterialButton } from '@/components/utils/Button';
import MaterialService from '@/services/material/materialService';
import { Material } from '@/services/material/types';
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
				<Link href={material.link}>
					<MaterialButton type="blue">
						Przejdź <FaAngleRight />
					</MaterialButton>
				</Link>
			</div>
		</div>
	);
}
