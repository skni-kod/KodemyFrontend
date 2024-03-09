import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import { IconType } from 'react-icons';

const PROVIDERS: { name: string; href: string; ico: { type: IconType; color: string } }[] = [
	{
		name: 'Github',
		href: 'http://localhost:8080/api/oauth2/authorize/github?redirect_uri=http://localhost:3000',
		ico: {
			type: AiFillGithub,
			color: 'text-slate-800',
		},
	},
];

const iconStyles = {
	width: '3vh',
	height: 'auto',
	aspectRatio: '1 / 1',
};

export default function AuthProvidersBtns() {
	return (
		<>
			{PROVIDERS.map(({ name, href, ico: { type, color } }, index) => (
				<Link
					key={index}
					href={href}
					className="flex items-center gap-2 p-3 rounded-lg border"
					passHref
				>
					{React.createElement(type, { className: color, style: iconStyles })}
					<h3>Kontynuuj z {name}</h3>
				</Link>
			))}
		</>
	);
}
