import React from 'react';
import {
	IoDocumentOutline,
	IoFileTrayOutline,
	IoLogOutOutline,
	IoPersonOutline,
	IoSettingsOutline,
} from 'react-icons/io5';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { useSessionContext } from '@/contexts/SessionContext';

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

	const menus: MenuLink[] = [
		{
			type: Menu.LINK,
			label: 'Konto użytkownika',
			icon: IoPersonOutline,
			href: `/users/${session?.user.id}`,
		},
		{
			type: Menu.HEADER,
			label: 'ZAWARTOŚĆ',
		},
		{
			type: Menu.LINK,
			label: 'Twoje materiały',
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
			label: 'Materiały użytkowników',
			icon: IoFileTrayOutline,
			href: '/materials/manage',
		},
		{
			type: Menu.LINK,
			label: 'Użytkownicy',
			icon: IoPersonOutline,
			href: '/users/manage',
		},
		{
			type: Menu.HEADER,
			label: 'KONTO',
		},
		{
			type: Menu.LINK,
			label: 'Ustawienia',
			icon: IoSettingsOutline,
			href: '/settings',
		},
		{
			type: Menu.LINK,
			label: 'Wyloguj',
			icon: IoLogOutOutline,
			href: '/auth/logout',
		},
	];

	return (
		<div className={`${menuClassName} w-60 bg-bg px-2 pb-2 pt-1 text-base font-normal shadow-md`}>
			<ul className="flex list-none flex-col">
				{menus.map(({ type, label, icon, href, isParsed }, idx) => (
					<li key={idx} className="w-full">
						{type == Menu.HEADER ? (
							<div className="w-full pt-1 uppercase">
								<span className="block w-full px-0.5 text-center text-xs text-gray-500">{label}</span>
								<div className="border-grey2white w-full border-t pb-1" />
							</div>
						) : (
							<Link
								className="hover:bg-bgHover flex cursor-pointer items-center gap-1 bg-bg px-1 py-2 tracking-wide"
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
