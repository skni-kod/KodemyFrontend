import React, { useEffect } from 'react';

import Error from '@/components/common/Error';
import Loading from '@/components/common/Loading';
import MaterialService from '@/services/material/materialService';
import { Material } from '@/services/material/types';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';

export default function DetailsModeHistory({ id }: { id: number }) {
	const { data: material, status, fetch } = useFetchState<Material>();

	useEffect(() => fetch(() => MaterialService.getMaterialById(id)), [fetch, id]);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !material) return <Error />;

	return (
		<div className="w-full p-7">
			<h2 className="text-lg font-semibold">TODO</h2>
		</div>
	);
}
