import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Link from 'next/link';
import { IconType } from 'react-icons';

const PROVIDERS: { name: string; ico: { type: IconType; color: string } }[] = [
	{
		name: 'Github',
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
			{PROVIDERS.map(({ name, ico: { type, color } }, index) => (
				<Link
					key={index}
					href=""
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
