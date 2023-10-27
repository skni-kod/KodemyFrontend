import Title from '@/components/common/Modal/Title';
import CloseCross from '@/components/common/Modal/CloseCross';
import CloseButton from '@/components/common/Modal/CloseButton';

const MaterialModalAdd = ({ handleCloseRatingModal }: { handleCloseRatingModal: () => void }) => {
	return (
		<div className="relative w-128 min-h-112 p-3 bg-white2verydarkgrey rounded-2xl">
			<CloseCross handleCloseCross={handleCloseRatingModal} />
			<div className="px-8 py-1 flex flex-col">
				<Title titletext="Oceny" descriptiontext="Szczegółowe oceny materiału" />
				<div> Chuje</div>
				<CloseButton handleCloseButton={handleCloseRatingModal} />
			</div>
		</div>
	);
};

export default MaterialModalAdd;
