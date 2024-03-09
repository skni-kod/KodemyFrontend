import { FaPlus } from 'react-icons/fa';

export default function AddMaterialIcoBtn({ onClick }: { onClick: () => void }) {
	return (
		<button className="h-full text-primary" onClick={onClick}>
			<FaPlus className="block h-6 w-6" />
		</button>
	);
}
