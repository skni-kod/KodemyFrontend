'use client';
import React, { useState } from 'react';
import { SlBell, SlPlus, SlUser } from 'react-icons/sl';
import NotificationDropDownMenu from '@/components/layout/navbar/right/NotificationDropDownMenu';
import UserDropDownMenu from '@/components/layout/navbar/right/UserDropDownMenu';
import { useRouter } from 'next/navigation';
import ComponentParentProps from '@/utils/types/node/componentParentProps';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa6';
import clsx from 'clsx';

enum Menu {
	OFF,
	NOTIFICATION,
	USER,
}

const MenuBtnWrapper = ({
	onClick,
	skeletonOnly = false,
	children,
}: ComponentParentProps & { onClick: () => void; skeletonOnly?: boolean }) => {
	if (skeletonOnly)
		return (
			<div className="h-[2rem] items-center rounded-md px-[0.66rem] py-[0.25rem]" onClick={onClick}>
				<div className="relative flex h-full flex-row gap-[6px]">{children}</div>
			</div>
		);

	return (
		<div className="h-[2rem] cursor-pointer rounded-md px-[0.66rem] py-[0.25rem]" onClick={onClick}>
			<div className="relative flex h-full flex-row gap-[6px]">{children}</div>
		</div>
	);
};

export default function UserActionBtns() {
	const [menuOpen, setMenuOpen] = useState<Menu>(Menu.OFF);

	const router = useRouter();

	const handleMenuClick = (menu: Menu) => {
		setMenuOpen(menuOpen == menu ? Menu.OFF : menu);
	};

	const handleMenuSearchClick = () => {
		handleMenuClick(Menu.OFF);
	};

	const handleMenuAddMaterialClick = () => {
		handleMenuClick(Menu.OFF);
	};

	const dropdownMenuClassName = 'top-navMenu absolute -right-[0.66rem] z-50 mt-0.5';

	return (
		<>
			<MenuBtnWrapper onClick={() => {}}>
				<SlPlus className="h-full text-2xl text-primary" />
			</MenuBtnWrapper>
			<MenuBtnWrapper onClick={() => handleMenuClick(Menu.NOTIFICATION)}>
				<div className="relative">
					<SlBell className="h-full text-2xl" />
					<span className="absolute left-0.5 top-[0.0625rem] h-2.5 w-2.5 rounded-xl bg-red-700"></span>
				</div>
				{React.createElement(menuOpen === Menu.NOTIFICATION ? FaAngleUp : FaAngleDown, { className: 'h-full text-sm' })}
				{menuOpen === Menu.NOTIFICATION && <NotificationDropDownMenu menuClassName={dropdownMenuClassName} />}
			</MenuBtnWrapper>
			<MenuBtnWrapper onClick={() => handleMenuClick(Menu.USER)}>
				<SlUser className="h-full text-2xl" />
				{React.createElement(menuOpen === Menu.USER ? FaAngleUp : FaAngleDown, { className: 'h-full text-sm' })}
				{menuOpen === Menu.USER && <UserDropDownMenu menuClassName={dropdownMenuClassName} />}
			</MenuBtnWrapper>
		</>
	);
}
