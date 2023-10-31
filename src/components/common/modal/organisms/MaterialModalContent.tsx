import useMaterialService, { Material } from '@/hooks/services/useMaterialIdService';
import { useEffect, useState } from 'react';
import BlankTargetLink from '@/components/common/modal/atoms/BlankTargetLink';
import { extractRRRRMMDD } from '@/utils/constant';
import CloseCross from '@/components/common/modal/atoms/CloseCross';
import CloseButton from '@/components/common/modal/atoms/CloseButton';

const MaterialModalContent = ({
	materialId,
	handleClose,
}: {
	materialId: number | undefined;
	handleClose: () => void;
}) => {
	const [material, setMaterial] = useState<Material>();
	const { getMaterialById } = useMaterialService();

	useEffect(() => {
		if (materialId)
			(async () => {
				setMaterial(await getMaterialById(materialId));
			})();
	}, [materialId, getMaterialById]);

	if (!material) {
		return null;
	}

	return (
		<div className="relative w-128 min-h-112 p-3 bg-white2verydarkgrey rounded-2xl">
			<CloseCross handleCloseCross={handleClose} />
			<div className="px-8 py-1">
				<div>
					<h2 className="text-4xl text-center font-semibold text-black2white">
						Szczegóły wybranego materiału
					</h2>
					<div className="text-gray-500 mt-2 text-center">
						Materiał został dodany:{' '}
						<span className="font-semibold">{extractRRRRMMDD(material.createdDate)}</span> przez:{' '}
						<span className="font-semibold cursor-pointer">{material.creator.username}</span>
					</div>
				</div>
				<div className="flex flex-col gap-y-2 mt-6 text-sky-500 font-semibold">
					<div>
						Tytuł: <span className="text-black2white">{material.title}</span>
					</div>
					<div>
						Typ materiału: <span className="text-black2white">{material.type.name}</span>
					</div>
					<div className="flex flex-col">
						Link:{' '}
						<BlankTargetLink
							href={material.link}
							className="text-black2white px-1 line-clamp-1 text-ellipsis hover:underline"
						/>
					</div>
					<div className="flex flex-col">
						<span>Opis:</span>
						<span className="text-black2white px-1">{material.description}</span>
					</div>
				</div>
				<CloseButton handleCloseButton={handleClose} />
			</div>
		</div>
	);
};

export default MaterialModalContent;
