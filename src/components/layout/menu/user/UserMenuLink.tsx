import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type UserMenuLinkProps = {
	href: string;
	ico: IconType;
	label: string;
};

export default function UserMenuLink({ href, ico, label }: UserMenuLinkProps) {
	return (
		<Link href={href} className="flex items-center gap-2 px-1 py-1 hover:overlay2bg cursor-pointer">
			<span>{React.createElement(ico)}</span>
			<span>{label}</span>
		</Link>
	);
}
