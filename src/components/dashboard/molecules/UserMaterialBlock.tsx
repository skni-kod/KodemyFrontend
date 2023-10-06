import { Material } from '@/hooks/services/useCategoryService';
import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';
import Status from '@/components/materials/atoms/Status';
import { BiStar } from 'react-icons/bi';

type UserMaterialProps = {
	data: Material;
};

const UserMaterialBlock = ({
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
}: UserMaterialProps) => {
	return (
		<div className="flex justify-between items-center py-4 px-9 shadow-md border-2 border-grey2white rounded-3xl shrink-0 bg-white2darkgrey text-black2white cursor-pointer">
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
				<div className="flex items-center">
					<BiStar /> <BiStar /> <BiStar /> <BiStar /> <BiStar />
				</div>
				<div className="md:flex gap-4 text-xl text-black2white text-bold mt-0.5">
					{title} <Status status={status} />
				</div>
				<div className="text-sm text-bold">{description}</div>
				<div className="text-xs">
					<div>Dodane przez: {user}</div>
					<div>Data Dodania: {createdDate.split('T')[0]}</div>
				</div>
			</div>
			<div className="flex flex-col items-center pl-5 py-2 border-l-2 text-xs">
				<div className="m-5">
					<h3 className="font-bold">Komentarz:</h3>
					<p className="pl-2">Zły, brzydki, fatalny</p>
				</div>
				<button className="bg-sky-500 hover:bg-blue-700 text-white text-xs 2sm:py-2 py-1 px-1 2sm:px-2 rounded">
					Edytuj materiał
				</button>
			</div>
		</div>
	);
};

export default UserMaterialBlock;
