import { Material } from '@/hooks/services/useMaterialService';
import { useEffect, useState } from 'react';
import useMaterialService from '@/hooks/services/useMaterialService';
import { AiOutlineClose } from 'react-icons/ai';
import BlankTargetLink from '@/components/materials/atoms/BlankTargetLink';
import { extractRRRRMMDD } from '@/utils/constant';

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
			<div className="flex justify-end">
				<button className="font-semibold hover:text-sky-500" onClick={() => handleClose()}>
					<AiOutlineClose height={24} width={24} />
				</button>
			</div>
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
				<div className="relative bottom-0 left-0 flex justify-center w-full pb-3 pt-11">
					<button
						className="bg-sky-500 hover:bg-blue-600 text-white2white text-[11px] lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded"
						onClick={() => handleClose()}
					>
						Zamknij
					</button>
				</div>
			</div>
		</div>
	);
};

export default MaterialModalContent;
