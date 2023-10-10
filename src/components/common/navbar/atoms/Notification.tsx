import DocumentsImage from '@/assets/material/documents.png';
import Image from 'next/image';

type MaterialPageProps = {
	status: string;
	time: string;
	path: string;
};

const Notification = ({ status, time, path }: MaterialPageProps) => {
	return (
		<div className="flex justify-between items-center w-full px-2 py-1.5 gap-3 shadow-md border rounded-lg shrink-0 bg-white2darkgrey text-grey2white cursor-pointer">
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
					width="20"
					height="20"
				/>
			</div>

			<div className="grow flex flex-col">
				<div className="text-black2white text-sm">{`Twój materiał został: ${status}`}</div>
				<div className="text-black2white text-xs">{path}</div>
				<div className="text-black2white text-xs">{`${time} temu`}</div>
			</div>
		</div>
	);
};

export default Notification;
