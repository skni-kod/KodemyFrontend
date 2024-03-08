import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type UserMenuLinkProps = {
	href: string;
	ico: IconType;
	label: string;
	onClick: () => void;
	passHref?: boolean;
};

export default function UserMenuLink({ href, ico, label, onClick, passHref }: UserMenuLinkProps) {
	return (
		<Link
			href={href}
			className="flex items-center gap-2 px-1 py-1 hover:bg-overlay2bg tracking-wide cursor-pointer"
			onClick={onClick}
			passHref={passHref}
		>
			<span>{React.createElement(ico)}</span>
			<span>{label}</span>
		</Link>
	);
}
