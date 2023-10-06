import NotificationComponent from '../atoms/NotificationComponent';
import { useState } from 'react';
import AllMaterialBoxComponent from '../molecules/AllMaterialBox';
import YourMaterialBoxComponent from '../molecules/YourMaterialBox';

enum Menu {
	ALL,
	YOUR,
}

const BellDropDownMenu = () => {
	const [menuMode, setMenuMode] = useState<Menu>(0);

	const handleMenuMode = (menu: Menu) => {
		setMenuMode(menu);
	};

	const isMenuOpen = (menu: Menu) => menuMode == menu;

	return (
		<div className="bg-white2darkgrey h-[auto] w-[323px] absolute top-[70px] right-[0px] shadow-md rounded-lg">
			<div className="h-[auto] flex justify-between m-2 relative">
				<h1 className="w-4/10 text-black2white text-[20px] p-1">
					Powiadomienia
				</h1>
				<button>
					<h1 className="w-4/10 text-black2white text-[10px] p-1 absolute bottom-[4px] right-[10px] underline">
						Odznacz powiadomienia
					</h1>
				</button>
			</div>
			<div className="h-[auto] w-[323px]">
				<div className="h-[auto] flex m-2 relative border-b">
					<button
						onClick={() => handleMenuMode(Menu.ALL)}
						className={isMenuOpen(Menu.ALL) ? 'text-blue-500' : ''}
					>
						<NotificationComponent
							text={'Wszystkie'}
							isActive={isMenuOpen(Menu.ALL)}
							className={'pl-4'}
							amount="3"
						/>
					</button>
					<button
						onClick={() => handleMenuMode(Menu.YOUR)}
						className={isMenuOpen(Menu.YOUR) ? 'text-blue-500' : ''}
					>
						<NotificationComponent
							text={'Twoje materiały'}
							isActive={isMenuOpen(Menu.YOUR)}
							className={'pl-4'}
							amount="6"
						/>
					</button>
				</div>
				{isMenuOpen(Menu.ALL) && <AllMaterialBoxComponent />}
				{isMenuOpen(Menu.YOUR) && <YourMaterialBoxComponent />}
			</div>
		</div>
	);
};

export default BellDropDownMenu;
