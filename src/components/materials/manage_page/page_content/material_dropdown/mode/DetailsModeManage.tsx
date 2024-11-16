import React, { useEffect } from 'react';
import MaterialService, { MaterialSwaggerStatus, MaterialSwaggerStatuses } from '@/services/material/materialService';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { Material } from '@/services/material/types';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa6';
import { MaterialButton } from '@/components/utils/Button';
import { useSessionContext } from '@/contexts/SessionContext';
import Link from 'next/link';
import { useToast } from '@/contexts/ToastContext';

export default function DetailsModeManage({ id }: { id: number }) {
	const { addToast } = useToast();
	const { session } = useSessionContext();
	const { data: material, status, fetch } = useFetchState<Material>();

	useEffect(() => fetch(() => MaterialService.getMaterialById(id)), [fetch, id]);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !material) return <Error />;

	const handleChangeStatus = async (newStatus: MaterialSwaggerStatus) => {
		try {
			if (!session || !session.token?.bearer) {
				console.error('No session or Bearer token found');
				return;
			}

			const response = await MaterialService.changeMaterialStatus(material.id, newStatus, session.token.bearer);

			addToast(`Zmieniono status materiału na: ${newStatus}`, 'success', 5000);
			console.log('Change status successfully:', response);
		} catch (error) {
			addToast(`Error changing status`, 'danger', 5000);
			console.error('Error changing status:', error);
		}
	};

	return (
		<div className="w-full p-7">
			<div className="w-full">
				<h2 className="text-lg font-semibold">Opis materiłu</h2>
				<p className="pt-2">
					Link:{' '}
					<Link href={material.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
						{material.link}
					</Link>
				</p>
				<p className="pt-2">Status: {material.status}</p>
				<p className="pt-2">Typ: {material.type.name}</p>
				<p className="pt-2">Data dodania: {material.createdDate.toString()}</p>
			</div>
			<div className="flex w-full justify-end gap-4 pt-4">
				<MaterialButton onClick={() => handleChangeStatus(MaterialSwaggerStatuses.REJECTED)} type="gray">
					Odrzuć <FaAngleDown />
				</MaterialButton>
				<MaterialButton onClick={() => handleChangeStatus(MaterialSwaggerStatuses.DRAFT)} type="green">
					Zaakceptuj <FaAngleRight />
				</MaterialButton>
			</div>
		</div>
	);
}
