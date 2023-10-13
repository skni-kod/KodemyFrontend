import { Material } from '@/hooks/services/useCategoryService';
import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';
import Status from '@/components/materials/atoms/Status';
import { BiStar } from 'react-icons/bi';
import MaterialWrapper from '@/components/common/page/atoms/MaterialWrapper';
import { Rating } from 'react-simple-star-rating';

type MaterialProps = {
	data: Material;
	handleOpenModal: (id: number) => void;
};

const MaterialBlock = ({
	data: { id, title, description, status, user, createdDate },
	handleOpenModal,
}: MaterialProps) => {
	return (
		<MaterialWrapper onClick={() => handleOpenModal(id)}>
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
					<div>
						<Rating
							initialValue={Math.round((Math.random() * 9.5) / 0.5) * 0.5}
							SVGstyle={{ display: 'inline' }}
							size={16}
							allowFraction
							readonly
						/>
					</div>
					<div className="text-xl text-black2white text-bold mt-0.5">{title}</div>
					<div className="text-sm text-bold">{description}</div>
				</div>
				<Status status={status} />
			</div>
			<div className="flex flex-col justify-center w-52 pl-5 py-2 gap-1 border-l-2 text-xs">
				<div>Dodane przez: {user}</div>
				<div>Data dodania: {createdDate.split('T')[0]}</div>
			</div>
		</MaterialWrapper>
	);
};

export default MaterialBlock;
