import Avatar from '@/components/common/navbar/atoms/Avatar';
import Bell from '../../atoms/Bell';
import { useState } from 'react';
import AvatarDropDownMenu from '../AvatarDropDownMenu';
import DayNightMode from '../../atoms/DayNightMode';
import BellDropDownMenu from '../BellDropDownMenu';
import { pageAddMaterialRoute } from '@/pages';
import Link from 'next/link';

enum UserBarMenu {
	NONE,
	BELL,
	AVATAR,
}

const UserBarPhone = () => {
	return (
		<div className=" items-center justify-between gap-x-4 flex pt-[1vh] pb-[2vh]">
			<button className="bg-sky-500  hover:bg-blue-600 text-white2white text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded">
				<Link href={pageAddMaterialRoute()}>Dodaj materiał</Link>
			</button>
			<div className="flex items-center gap-x-4 font-bold">
				<DayNightMode className="flex md:hidden" />
			</div>
		</div>
	);
};

export default UserBarPhone;
