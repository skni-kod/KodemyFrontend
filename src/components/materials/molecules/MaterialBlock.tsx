import { Material } from '@/hooks/services/useCategoryService';
import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';
import Status from '@/components/materials/atoms/Status';
import { BiStar } from 'react-icons/bi';

type MaterialProps = {
	data: Material;
};

const MaterialBlock = ({
	data: {
		title,
		description,
		link,
		status,
		user,
		createdDate,
		categoryId,
		active,
	},
}: MaterialProps) => {
	return (
		<div className="flex justify-between items-center py-4 px-9 shadow-md border-2 rounded-3xl shrink-0 bg-white text-gray-500 cursor-pointer">
			<div className="flex-none h-20 w-20 flex justify-center items-center aspect-square bg-gray-100">
				<Image
					src={DocumentsImage.src}
					alt="Materiał Kodemy"
					className="aspect-square"
					width="50"
					height="50"
				/>
			</div>
			<div className="grow flex justify-between items-center px-5">
				<div>
					<div className="flex items-center">
						<BiStar /> <BiStar /> <BiStar /> <BiStar /> <BiStar />
					</div>
					<div className="text-xl text-black text-bold mt-0.5">{title}</div>
					<div className="text-sm text-bold">{description}</div>
				</div>
				<Status status={status} />
			</div>
			<div className="flex-none pl-5 py-2 border-l-2 text-xs">
				<div>Dodane przez: {user}</div>
				<div>Data Dodania: {createdDate.split('T')[0]}</div>
			</div>
		</div>
	);
};

export default MaterialBlock;
