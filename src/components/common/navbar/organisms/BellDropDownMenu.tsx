import NotificationComponent from '../atoms/NotificationComponent';
import { useState } from 'react';
import AllMaterialBoxComponent from '../molecules/AllMaterialBox';
import YourMaterialBoxComponent from '../molecules/YourMaterialBox';

const BellDropDownMenu = () => {
	const [allMaterials, setAllMaterials] = useState(true);
	const [yourMaterials, setYourMaterials] = useState(false);

	const toggleAllMaterials = () => {
		if (!allMaterials) {
			setAllMaterials(true);
			setYourMaterials(false);
		}
	};

	const toggleYourMaterials = () => {
		if (!yourMaterials) {
			setAllMaterials(false);
			setYourMaterials(true);
		}
	};

	return (
		<div className="bg-white h-[auto] w-[323px] absolute top-[70px] right-[0px] shadow-md rounded-lg">
			<div className="h-[auto] flex justify-between m-2 relative">
				<h1 className="w-4/10 text-black text-[20px] p-1">Powiadomienia</h1>
				<button>
					<h1 className="w-4/10 text-black text-[10px] p-1 absolute bottom-[4px] right-[10px] underline">
						Odznacz powiadomienia
					</h1>
				</button>
			</div>
			<div className="h-[auto] w-[323px]">
				<div className="h-[auto] flex m-2 relative border-b">
					<button
						onClick={toggleAllMaterials}
						className={allMaterials ? 'text-blue-500' : ''}
					>
						<NotificationComponent
							text={'Wszystkie'}
							isActive={allMaterials}
							className={'pl-4'}
							amount="3"
						/>
					</button>
					<button
						onClick={toggleYourMaterials}
						className={yourMaterials ? 'text-blue-500' : ''}
					>
						<NotificationComponent
							text={'Twoje materiały'}
							isActive={yourMaterials}
							className={'pl-4'}
							amount="6"
						/>
					</button>
				</div>
				{allMaterials && <AllMaterialBoxComponent />}
				{yourMaterials && <YourMaterialBoxComponent />}
			</div>
		</div>
	);
};

export default BellDropDownMenu;
