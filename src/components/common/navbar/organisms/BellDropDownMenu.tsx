import NotificationComponent from '../atoms/NotificationComponent';
import { useState } from 'react';
import AllMaterialBoxComponent from '../molecules/AllMaterialBox';
import YourMaterialBoxComponent from '../molecules/YourMaterialBox';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import NotificationsMenu from '../molecules/NotificationsMenu';

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

	const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
	const toggleNotificationsMenu = () => {
		setIsNotificationsMenuOpen(!isNotificationsMenuOpen);
	};

	return (
		<div className="bg-white2darkgrey h-[auto] w-[323px] absolute top-[80px] right-[20px] shadow-md rounded-lg">
			<div className="h-[auto] flex items-center justify-between m-2 relative">
				<h1 className="w-4/10 text-black2white text-[20px] p-1">
					Powiadomienia
				</h1>
				<button className="pr-[1vw] relative" onClick={toggleNotificationsMenu}>
					<BiDotsHorizontalRounded className="cursor-pointer text-grey2white text-2xl h-[25.5px] w-[25.5px]" />
				</button>
			</div>
			<div className="h-[auto] w-[323px]">
				<div className="h-[auto] flex justify-center mb-4">
					<button
						onClick={() => handleMenuMode(Menu.ALL)}
						className={isMenuOpen(Menu.ALL) ? 'text-blue-500' : ''}
					>
						<NotificationComponent
							text={'Wszystkie'}
							isActive={isMenuOpen(Menu.ALL)}
							className={'pl-0'}
							amount="3"
						/>
					</button>
					<button
						onClick={() => handleMenuMode(Menu.YOUR)}
						className={isMenuOpen(Menu.YOUR) ? 'text-blue-500' : ''}
					>
						<NotificationComponent
							text={'Nieprzeczytane'}
							isActive={isMenuOpen(Menu.YOUR)}
							className={'pl-8'}
							amount="6"
						/>
					</button>
				</div>
				{isNotificationsMenuOpen && <NotificationsMenu />}
				{isMenuOpen(Menu.ALL) && <AllMaterialBoxComponent />}
				{isMenuOpen(Menu.YOUR) && <YourMaterialBoxComponent />}
			</div>
		</div>
	);
};

export default BellDropDownMenu;
