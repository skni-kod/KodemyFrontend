import Avatar from '@/components/common/navbar/atoms/Avatar';
import Bell from '../../atoms/Bell';
import BellDropDownMenu from '../BellDropDownMenu';
import { useState } from 'react';
import AvatarDropDownMenu from '../AvatarDropDownMenu';
import DayNightMode from '../../atoms/DayNightMode';
import Link from 'next/link';
import { pageAddMaterialRoute, pageLoginRoute } from '@/pages/route';
import { BiSearch } from 'react-icons/bi';
import { useAuthStore } from '@/store/authSlice';
import { useRouter } from 'next/router';

enum UserBarMenu {
	NONE,
	BELL,
	AVATAR,
}

const UserBar = () => {
	const IconClassNames = 'cursor-pointer text-grey2white text-2xl h-6 w-6';

	const [userBarMenu, setUserBarMenu] = useState<UserBarMenu>(0);
	const { user } = useAuthStore();
	const router = useRouter();

	const handleOpenMenu = (menu: UserBarMenu) => {
		if (!user) router.push(pageLoginRoute());
		else setUserBarMenu(menu);
	};

	const isOpenMenu = (menu: UserBarMenu) => userBarMenu == menu;

	return (
		<div className="flex items-center justify-between gap-x-4">
			<button className="bg-sky-500  hover:bg-blue-600 text-white2white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded hidden md:flex">
				<Link href={pageAddMaterialRoute()}>Dodaj materiał</Link>
			</button>
			<div className="flex items-center gap-x-3 lg:gap-x-4 font-bold">
				<BiSearch
					className={`sm:h-full sm:w-auto text-grey2white text-2xl flex sm:hidden cursor-pointer`}
				/>
				<DayNightMode className="hidden md:flex" />
				<button
					onClick={() =>
						handleOpenMenu(!isOpenMenu(UserBarMenu.BELL) ? UserBarMenu.BELL : UserBarMenu.NONE)
					}
				>
					<Bell className={IconClassNames} />
				</button>
				<button
					onClick={() =>
						handleOpenMenu(!isOpenMenu(UserBarMenu.AVATAR) ? UserBarMenu.AVATAR : UserBarMenu.NONE)
					}
				>
					<Avatar />
				</button>
			</div>
			{user && isOpenMenu(UserBarMenu.BELL) && (
				<BellDropDownMenu
					className="top-full mt-1.5"
					handleClose={() => setUserBarMenu(UserBarMenu.NONE)}
				/>
			)}
			{user && isOpenMenu(UserBarMenu.AVATAR) && (
				<AvatarDropDownMenu
					className="top-full mt-1.5"
					handleClose={() => setUserBarMenu(UserBarMenu.NONE)}
				/>
			)}
		</div>
	);
};

export default UserBar;
