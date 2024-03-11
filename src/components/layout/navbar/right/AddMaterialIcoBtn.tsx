import { FaPlus } from 'react-icons/fa';
import AddMaterialModal from '@/components/materials/add_modal/AddMaterialModal';
import { useState } from 'react';

export default function AddMaterialIcoBtn({ onClick }: { onClick?: () => void }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<>
			<button className="h-full text-primary" onClick={() => setIsOpen(true)}>
				<FaPlus className="block h-6 w-6" />
			</button>
			<AddMaterialModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</>
	);
}
