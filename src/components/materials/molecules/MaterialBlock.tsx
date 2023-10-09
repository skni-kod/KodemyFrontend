import { Material } from '@/hooks/services/useCategoryService';
import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';
import Status from '@/components/materials/atoms/Status';
import { BiStar } from 'react-icons/bi';
import { useState } from 'react';
import clsx from 'clsx';

type MaterialProps = {
	data: Material;
	handleOpenModal: (id: number) => void;
};

const MaterialBlock = ({
	data: { id, title, description, status, user, createdDate },
	handleOpenModal,
}: MaterialProps) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			className={clsx(
				'flex justify-between items-center py-4 px-9 shadow-md border-2 rounded-3xl shrink-0 bg-white2black text-grey2white cursor-pointer',
				isHover ? 'border-sky-500' : null,
			)}
			onClick={() => handleOpenModal(id)}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
		>
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
					<div className="text-xl text-black2white text-bold mt-0.5">{title}</div>
					<div className="text-sm text-bold">{description}</div>
				</div>
				<Status status={status} />
			</div>
			<div className="flex-none pl-5 py-2 border-l-2 text-xs">
				<div>Dodane przez: {user}</div>
				<div>Data dodania: {createdDate.split('T')[0]}</div>
			</div>
		</div>
	);
};

export default MaterialBlock;
