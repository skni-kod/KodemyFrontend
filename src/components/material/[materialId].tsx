import useMaterialService from '@/hooks/services/useMaterialIdService';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const MaterialContent = () => {
	const router = useRouter();
	const { getMaterialById } = useMaterialService();

	const [material, setMaterial] = useState(null);

	useEffect(() => {
		const { materialId } = router.query;

		const fetchMaterialById = async () => {
			try {
				const materialData = await getMaterialById(Number(materialId));
				setMaterial(materialData);
				console.log(materialData);
			} catch (error) {
				console.error('Error fetching material by ID', error);
			}
		};

		if (materialId) {
			fetchMaterialById();
		}
	}, [router.query, getMaterialById]);

	return (
		<div className="bg-white2verydarkgrey min-h-[100vh] py-20 w-full px-3 text-black2white md:pl-28">
			{material ? (
				<>
					<h2 className="w-full mt-4 text-semibold text-[36px]">Tytuł: {material.title}</h2>
					<div className="w-full mt-4 text-semibold text-[16px]">
						<p>id: {material.id}</p>
						<p>opis: {material.description}</p>
						<p>autor: {material.author.username}</p>
						<p>i tak dalej....</p>
						<p>To jest do zrobienia</p>
					</div>
				</>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default MaterialContent;
