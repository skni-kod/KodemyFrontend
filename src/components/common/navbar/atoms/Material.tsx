import { Material } from '@/hooks/services/useCategoryService';
import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';

type MaterialPageProps = {
	status: string;
	time: string;
	path: string;
};

const MaterialPage = ({ status, time, path }: MaterialPageProps) => {
	return (
		<div className="flex justify-between items-center py-1 px-1 shadow-md border-2 rounded-2xl shrink-0 bg-white text-gray-500 cursor-pointer">
			<div className="flex-none h-5 w-5 flex justify-center items-center aspect-square bg-gray-100">
				<Image
					src={DocumentsImage.src}
					alt="Materiał Kodemy"
					className="aspect-square"
					width="16"
					height="16"
				/>
			</div>
			<div className="grow flex justify-between items-center px-1">
				<div>
					<div className="text-black text-[12px] mt-0.5">{`Twój materiał został: ${status}`}</div>
					<div className="text-[10px]">{`${time} temu | ${path}`}</div>
				</div>
			</div>
		</div>
	);
};

export default MaterialPage;
