import React, { useEffect } from 'react';
import MaterialService from '@/services/material/materialService';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { Material } from '@/services/material/types';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { MaterialButton } from '@/components/utils/Button';

export default function DetailsModeManage({ id }: { id: number }) {
	const { data: material, status, fetch } = useFetchState<Material>();

	useEffect(() => fetch(() => MaterialService.getMaterialById(id)), [fetch, id]);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !material) return <Error />;

	function handleMenuAddMaterialClick() {}

	return (
		<div className="w-full p-7">
			<h2 className="text-lg font-semibold">TODO</h2>
			<div className="flex w-full justify-end gap-4 pt-4">
				<MaterialButton onClick={handleMenuAddMaterialClick} type="gray">
					Odrzuć <FaAngleDown />
				</MaterialButton>
				<MaterialButton onClick={handleMenuAddMaterialClick} type="green">
					Zaakceptuj <FaAngleRight />
				</MaterialButton>
			</div>
		</div>
	);
}
