import { AiOutlineClose } from 'react-icons/ai';

const CloseCross = ({ handleCloseCross }: { handleCloseCross: () => void }) => {
	return (
		<div className="flex justify-end">
			<button
				className="font-semibold text-black2white hover:text-sky-500"
				onClick={() => handleCloseCross()}
			>
				<AiOutlineClose height={24} width={24} />
			</button>
		</div>
	);
};

export default CloseCross;
