import MaterialWrapper from '@/components/common/page/atoms/MaterialWrapper';
import Image from 'next/image';
import DocumentsImage from '@/assets/material/documents.png';
import { BiStar } from 'react-icons/bi';
import Status from '@/components/materials/atoms/Status';
import { Material } from '@/hooks/services/useCategoryService';
import React from 'react';

const DashboardMaterialBlock = ({
	data: { id, title, description, link, status, user, createdDate, categoryId, active },
	children,
}: {
	data: Material;
	children: React.ReactNode;
}) => {
	return (
		<MaterialWrapper onClick={() => {}}>
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
					<div className="flex-none text-xs text-bold pt-1">
						<div>
							Dodane {createdDate.split('T')[0]} przez: {user}
						</div>
					</div>
				</div>
				<Status status={status} />
			</div>
			<div className="flex flex-col justify-center items-center w-52 pl-5 py-2 gap-1 border-l-2 text-xs">
				{children}
			</div>
		</MaterialWrapper>
	);
};

export default DashboardMaterialBlock;
