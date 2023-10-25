import { AiOutlineClose } from 'react-icons/ai';

const AddMaterialModalContent = ({ handleClose }: { handleClose: () => void }) => {
	return (
		<div className="relative w-128 min-h-112 p-3 bg-white2verydarkgrey rounded-2xl">
			<div className="flex justify-end">
				<button
					className="font-semibold text-black2white hover:text-sky-500"
					onClick={() => handleClose()}
				>
					<AiOutlineClose height={24} width={24} />
				</button>
			</div>
			<div className="px-8 py-1">
				<div className="relative bottom-0 left-0 flex justify-center w-full pb-3 pt-11">
					<button
						className="bg-sky-500 hover:bg-blue-600 text-white2white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded"
						onClick={() => handleClose()}
					>
						Zamknij
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddMaterialModalContent;
