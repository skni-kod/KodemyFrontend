import Title from '@/components/common/modal/atoms/Title';
import CloseCross from '@/components/common/modal/atoms/CloseCross';
import CloseButton from '@/components/common/modal/atoms/CloseButton';
import List from '../atoms/List';

const MaterialModalAdd = ({ handleCloseAddedModal }: { handleCloseAddedModal: () => void }) => {
	return (
		<div className="relative w-128 p-3 bg-white2verydarkgrey rounded-2xl">
			<CloseCross handleCloseCross={handleCloseAddedModal} />
			<div className="px-8 py-1 flex flex-col">
				<Title titletext="Zakładki" descriptiontext="Dodaj Materiał do zakładek" />
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center">
					<div className="flex justify-center">
						<List name="Ulubione" />
					</div>
					<div className="flex justify-center">
						<List name="C++" />
					</div>
					<div className="flex justify-center">
						<List name="Java" />
					</div>
					<div className="flex justify-center">
						<List name="Javsssssssss" />
					</div>
					<div className="flex justify-center">
						<List name="Java" />
					</div>
					<div className="flex justify-center">
						<List name="Java" />
					</div>
				</div>

				<CloseButton handleCloseButton={handleCloseAddedModal} />
			</div>
		</div>
	);
};

export default MaterialModalAdd;
