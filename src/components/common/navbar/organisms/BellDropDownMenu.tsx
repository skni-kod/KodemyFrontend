import NotificationComponent from '../atoms/NotificationComponent';
import React, { useState } from 'react';
import AllMaterialBoxComponent from '../molecules/AllMaterialBox';
import YourMaterialBoxComponent from '../molecules/YourMaterialBox';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import NotificationsMenu from '../molecules/NotificationsMenu';
import { useAuthStore } from '@/store/authSlice';

enum Menu {
	ALL,
	YOUR,
}

const BellDropDownMenu = ({ className }: { className?: string; handleClose?: () => void }) => {
	const [menuMode, setMenuMode] = useState<Menu>(0);
	const { isAuth } = useAuthStore();

	const handleMenuMode = (menu: Menu) => {
		setMenuMode(menu);
	};

	const isMenuOpen = (menu: Menu) => menuMode == menu;

	const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false);
	const toggleNotificationsMenu = () => {
		setIsNotificationsMenuOpen((isNotificationsMenuOpen) => !isNotificationsMenuOpen);
	};

	return (
		<div
			className={`absolute right-5 h-auto w-88 px-3 py-2 ${className} bg-white2darkgrey shadow-md rounded-lg`}
		>
			<div className="h-auto flex items-center justify-between m-2">
				<h1 className="w-4/10 text-black2white text-[20px] p-1">Powiadomienia</h1>
				<button className="relative" onClick={toggleNotificationsMenu}>
					<BiDotsHorizontalRounded className="cursor-pointer text-grey2white text-2xl h-6 w-6" />
				</button>
			</div>
			<div className="h-auto w-full">
				<div className="h-auto flex justify-between mb-2.5 px-8">
					<button
						onClick={() => handleMenuMode(Menu.ALL)}
						className={isMenuOpen(Menu.ALL) ? 'text-blue-500' : ''}
					>
						<NotificationComponent text={'Wszystkie'} isActive={isMenuOpen(Menu.ALL)} amount="3" />
					</button>
					<button
						onClick={() => handleMenuMode(Menu.YOUR)}
						className={isMenuOpen(Menu.YOUR) ? 'text-blue-500' : ''}
					>
						<NotificationComponent
							text={'Nieprzeczytane'}
							isActive={isMenuOpen(Menu.YOUR)}
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
