import NotificationComponent from '../atoms/NotificationComponent';
import { useState } from 'react';
import AllMaterialBoxComponent from '../molecules/AllMaterialBox';

const BellDropDownMenu = () => {
	const [allMaterials, setallMaterials] = useState(true);
	const toggleAllMaterials = () => {
		setallMaterials(!allMaterials);
	};

	return (
		<div className="bg-white h-[auto] w-[323px] absolute top-[70px] right-[0px] shadow-md rounded-lg">
			<div className=" h-[auto] flex justify-between m-2 relative">
				<h1 className="w-4/10 text-black text-[20px] p-1">Powiadomienia</h1>
				<h1 className="w-4/10 text-black text-[10px] p-1 absolute bottom-[4px] right-[10px] underline">
					Odznacz powiadomienia
				</h1>
			</div>
			<div className=" h-[auto] w-[323px]">
				<div className=" h-[auto] flex m-2 relative underline border-b">
					<div onClick={toggleAllMaterials}>
						<NotificationComponent text={'Wszystkie'} className={'pl-4'} />
					</div>

					<NotificationComponent text={'Twoje materiały'} className={'pl-4'} />
				</div>
				{allMaterials && <AllMaterialBoxComponent />}
			</div>
		</div>
	);
};

export default BellDropDownMenu;
