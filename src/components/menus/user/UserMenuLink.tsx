import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

type UserMenuLinkProps = {
	href: string;
	ico: IconType;
	label: string;
	onClick: () => void;
};

export default function UserMenuLink({
	href,
	ico,
	label,
	onClick,
}: UserMenuLinkProps) {
	return (
		<Link
			href={href}
			className="flex items-center gap-2 px-1 py-1 hover:bg-overlay2bg cursor-pointer"
			onClick={onClick}
		>
			<span>{React.createElement(ico)}</span>
			<span>{label}</span>
		</Link>
	);
}
