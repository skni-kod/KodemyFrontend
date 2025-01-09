import React, { useMemo } from 'react';
import { IconType } from 'react-icons';
import {
	IoDocumentOutline,
	IoFileTrayOutline,
	IoLogOutOutline,
	IoPersonOutline,
	IoSettingsOutline,
} from 'react-icons/io5';
import Link from 'next/link';

import { useSessionContext } from '@/contexts/SessionContext';
import { USER_NAV_MENU } from '@/utils/constant';

enum Menu {
	HEADER,
	LINK,
}

type MenuLink = {
	type: Menu;
	label: string;
	icon?: IconType;
	href?: string;
	isParsed?: true;
};

interface UserDropDownMenuProps {
	menuClassName: string;
}

export default function UserDropDownMenu({ menuClassName }: UserDropDownMenuProps) {
	const { session } = useSessionContext();

	const menus: MenuLink[] = useMemo(() => {
		return [
			{
				type: Menu.LINK,
				label: USER_NAV_MENU.LINK.USER_ACCOUNT,
				icon: IoPersonOutline,
				href: `/users/${session?.user.id}`,
			},
			{
				type: Menu.HEADER,
				label: 'ZAWARTOŚĆ',
			},
			{
				type: Menu.LINK,
				label: USER_NAV_MENU.LINK.YOUR_MATERIALS,
				icon: IoDocumentOutline,
				href: `/materials/users/${session?.user.id}`,
				isParsed: true,
			},
			{
				type: Menu.HEADER,
				label: 'ADMINISTRACJA',
			},
			{
				type: Menu.LINK,
				label: USER_NAV_MENU.LINK.USERS_MATERIALS,
				icon: IoFileTrayOutline,
				href: '/materials/manage',
			},
			{
				type: Menu.LINK,
				label: USER_NAV_MENU.LINK.USERS,
				icon: IoPersonOutline,
				href: '/users/manage',
			},
			{
				type: Menu.LINK,
				label: USER_NAV_MENU.LINK.DEV_TOOLS,
				icon: IoSettingsOutline,
				href: '/dev-tools',
			},
			{
				type: Menu.HEADER,
				label: 'KONTO',
			},
			{
				type: Menu.LINK,
				label: USER_NAV_MENU.LINK.SETTINGS,
				icon: IoSettingsOutline,
				href: '/settings',
			},
			{
				type: Menu.LINK,
				label: USER_NAV_MENU.LINK.LOGOUT,
				icon: IoLogOutOutline,
				href: '/auth/logout',
			},
		];
	}, [session?.user.id]);

	return (
		<div className={`${menuClassName} w-60 bg-bg px-2 pb-2 pt-1 text-base font-normal shadow-md`}>
			<ul className="flex list-none flex-col">
				{menus.map(({ type, label, icon, href, isParsed }, idx) => (
					<li key={idx} className="w-full">
						{type == Menu.HEADER ? (
							<div className="w-full pt-1 uppercase">
								<span className="block w-full px-0.5 text-center text-xs text-secondary">{label}</span>
								<div className="w-full border-t border-secondary pb-1" />
							</div>
						) : (
							<Link
								className="flex cursor-pointer items-center gap-1 rounded-md bg-bg px-1 py-2 tracking-wide text-secondary hover:bg-bgHover"
								href={href!}
							>
								{React.createElement(icon!)}
								<span>{label}</span>
							</Link>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
