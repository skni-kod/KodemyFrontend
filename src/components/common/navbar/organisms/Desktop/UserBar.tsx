import Avatar from '@/components/common/navbar/atoms/Avatar';
import Bell from '../../atoms/Bell';
import BellDropDownMenu from '../BellDropDownMenu';
import { useState } from 'react';
import AvatarDropDownMenu from '../AvatarDropDownMenu';
import DayNightMode from '../../atoms/DayNightMode';
import Link from 'next/link';
import { pageAddMaterialRoute, pageLoginRoute } from '@/pages';
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
	const { isAuth } = useAuthStore();
	const router = useRouter();

	const handleOpenMenu = (menu: UserBarMenu) => setUserBarMenu(menu);

	const isOpenMenu = (menu: UserBarMenu) => userBarMenu == menu;

	return (
		<div className="flex items-center justify-between gap-x-4">
			<button className="bg-sky-500  hover:bg-blue-600 text-white2white text-[11px] lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded hidden md:flex">
				<Link href={pageAddMaterialRoute()}>Dodaj materiał</Link>
			</button>
			<div className="flex items-center gap-x-3 lg:gap-x-4 font-bold">
				<BiSearch
					className={`sm:h-[25.5px] sm:w-[25.5px] text-grey2white text-2xl flex sm:hidden`}
				/>
				<DayNightMode className="hidden md:flex" />
				<button
					onClick={() =>
						isAuth()
							? handleOpenMenu(!isOpenMenu(UserBarMenu.BELL) ? UserBarMenu.BELL : UserBarMenu.NONE)
							: router.push(pageLoginRoute())
					}
				>
					<Bell className={IconClassNames} />
				</button>
				<button
					onClick={() =>
						isAuth()
							? handleOpenMenu(
									!isOpenMenu(UserBarMenu.AVATAR) ? UserBarMenu.AVATAR : UserBarMenu.NONE,
							  )
							: router.push(pageLoginRoute())
					}
				>
					<Avatar />
				</button>
			</div>
			{isAuth() && isOpenMenu(UserBarMenu.BELL) && (
				<BellDropDownMenu
					className="top-full mt-1.5"
					handleClose={() => setUserBarMenu(UserBarMenu.NONE)}
				/>
			)}
			{isAuth() && isOpenMenu(UserBarMenu.AVATAR) && (
				<AvatarDropDownMenu
					className="top-full mt-1.5"
					handleClose={() => setUserBarMenu(UserBarMenu.NONE)}
				/>
			)}
		</div>
	);
};

export default UserBar;
