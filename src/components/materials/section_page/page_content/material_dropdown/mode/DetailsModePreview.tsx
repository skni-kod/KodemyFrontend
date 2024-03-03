import { useEffect, useState } from 'react';
import useMaterialService, { Material } from '@/hooks/services/useMaterialService';
import { getMaterials } from '@/mocks/materialService';
import Link from 'next/link';
import { FaAngleRight } from 'react-icons/fa6';

export default function DetailsModePreview({ id }: { id: number }) {
	const [isLoading, setIsLoading] = useState(true);
	const [materialPreview, setMaterialPreview] = useState<Material | null>(null);

	const { getMaterialById } = useMaterialService();

	useEffect(() => {
		(async () => {
			try {
				setMaterialPreview(await getMaterialById(id));
			} finally {
				setIsLoading(false);
			}
		})();
	}, [id, getMaterialById]);

	if (!materialPreview) return null;
	if (isLoading) return null;

	return (
		<div className="p-7">
			<div className="w-full">
				<h2 className="text-lg font-semibold">Opis</h2>
				<p className="pt-2">{materialPreview.description}</p>
			</div>
			<div className="flex justify-end w-full pt-4">
				<Link
					href={materialPreview.link}
					className="flex items-center gap-1 h-9 px-4 bg-primary text-lg font-semibold text-text2primary rounded-xl"
				>
					Przejdź <FaAngleRight />
				</Link>
			</div>
		</div>
	);
}