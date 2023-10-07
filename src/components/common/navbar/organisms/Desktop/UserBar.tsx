import Avatar from '@/components/common/navbar/atoms/Avatar';
import Bell from '../../atoms/Bell';
import BellDropDownMenu from './BellDropDownMenu';
import { useState } from 'react';
import AvatarDropDownMenu from './AvatarDropDownMenu';
import DayNightMode from '../../atoms/DayNightMode';

enum UserBarMenu {
	NONE,
	BELL,
	AVATAR,
}

const UserBar = () => {
	const IconClassNames =
		'cursor-pointer text-grey2white text-2xl h-[25.5px] w-[25.5px]';

	const [userBarMenu, setUserBarMenu] = useState<UserBarMenu>(0);

	const handleOpenMenu = (menu: UserBarMenu) => setUserBarMenu(menu);

	const isOpenMenu = (menu: UserBarMenu) => userBarMenu == menu;

	return (
		<div className=" items-center justify-between gap-x-4 hidden md:flex">
			<button className="bg-sky-500  hover:bg-blue-600 text-white2white text-[11px] lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded">
				Dodaj materiał
			</button>
			<div className="flex items-center gap-x-4 font-bold">
				<DayNightMode />
				<button
					onClick={() =>
						handleOpenMenu(
							!isOpenMenu(UserBarMenu.BELL)
								? UserBarMenu.BELL
								: UserBarMenu.NONE,
						)
					}
				>
					<Bell className={IconClassNames} />
				</button>
				<button
					onClick={() =>
						handleOpenMenu(
							!isOpenMenu(UserBarMenu.AVATAR)
								? UserBarMenu.AVATAR
								: UserBarMenu.NONE,
						)
					}
				>
					<Avatar />
				</button>
			</div>
			{isOpenMenu(UserBarMenu.BELL) && <BellDropDownMenu />}
			{isOpenMenu(UserBarMenu.AVATAR) && <AvatarDropDownMenu />}
		</div>
	);
};

export default UserBar;
