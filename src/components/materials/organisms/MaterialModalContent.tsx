import { Material } from '@/hooks/services/useCategoryService';
import { useEffect, useState } from 'react';
import useMaterialService from '@/hooks/services/useMaterialService';
import { AiOutlineClose } from 'react-icons/ai';

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
	}, [materialId]);

	return (
		<div className="w-96 h-96 px-2 py-2 bg-white2white rounded-lg">
			<div className="flex justify-end p-">
				<button onClick={() => handleClose()}>
					<AiOutlineClose />
				</button>
			</div>
			<h2 className="text-center font-semibold">Szczegóły wybranego materiału</h2>
		</div>
	);
};

export default MaterialModalContent;
