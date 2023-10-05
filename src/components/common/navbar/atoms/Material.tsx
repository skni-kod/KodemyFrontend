import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';

type MaterialPageProps = {
	status: string;
	time: string;
	path: string;
};

const MaterialPage = ({ status, time, path }: MaterialPageProps) => {
	return (
		<div className="flex justify-between items-center py-1 px-1 shadow-md border-2 rounded-2xl shrink-0 bg-body text-icon cursor-pointer">
			<div
				className={`flex-none h-5 w-5 flex justify-center items-center rounded aspect-square ${
					status === 'Przyjęty'
						? 'bg-green-300'
						: status === 'Odrzucony'
						? 'bg-red-300'
						: 'bg-yellow-300'
				}`}
			>
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
					<div className="text-black2white text-[12px] mt-0.5">{`Twój materiał został: ${status}`}</div>
					<div className="text-black2white text-[10px]">{`${time} temu | ${path}`}</div>
				</div>
			</div>
		</div>
	);
};

export default MaterialPage;
