import Title from '@/components/common/Modal/Title';
import CloseCross from '@/components/common/Modal/CloseCross';
import CloseButton from '@/components/common/Modal/CloseButton';

const MaterialModalAdd = ({ handleCloseAddedModal }: { handleCloseAddedModal: () => void }) => {
	return (
		<div className="relative w-128 min-h-112 p-3 bg-white2verydarkgrey rounded-2xl">
			<CloseCross handleCloseCross={handleCloseAddedModal} />
			<div className="px-8 py-1 flex flex-col">
				<Title titletext="Zakładki" descriptiontext="Dodaj Materiał do zakładek" />
				<div className="text-black2white"> Folder 1</div>
				<CloseButton handleCloseButton={handleCloseAddedModal} />
			</div>
		</div>
	);
};

export default MaterialModalAdd;
