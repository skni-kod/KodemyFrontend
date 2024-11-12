import React, { useEffect } from 'react';
import MaterialService from '@/services/material/materialService';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { Material } from '@/services/material/types';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';

export default function DetailsModeManage({ id }: { id: number }) {
	const { data: material, status, fetch } = useFetchState<Material>();

	useEffect(() => fetch(() => MaterialService.getMaterialById(id)), [fetch, id]);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !material) return <Error />;

	return (
		<div className="w-full p-7">
			<h2 className="text-lg font-semibold">TODO</h2>
			<div className="flex w-full justify-end gap-4 pt-4">
				<button className="flex h-9 items-center gap-1 rounded-xl bg-gray-700 px-4 text-lg font-semibold text-gray-200">
					Odrzuć <FaAngleDown />
				</button>
				<button className="flex h-9 items-center gap-1 rounded-xl bg-green-600 px-4 text-lg font-semibold text-green-100">
					Zaakceptuj <FaAngleRight />
				</button>
			</div>
		</div>
	);
}
