import React from 'react';
import ProviderButton from '@/components/login/atoms/ProviderButton';
import { AiFillGithub, AiFillGoogleCircle } from 'react-icons/ai';
import Link from 'next/link';
import { pageLoginRoute } from '@/pages/route';
import Route from '@/utils/route';
import { IconType } from 'react-icons';

type AuthProvider = {
	name: string;
	ico: {
		element: IconType;
		className?: string;
	};
	route: Route;
};

type AuthProviders = {
	github: AuthProvider;
	google: AuthProvider;
};

const authorizeApiAuth = (originLocation: Location): AuthProviders => {
	return {
		github: {
			name: 'Github',
			ico: {
				element: AiFillGithub,
				className: 'text-slate-800',
			},
			route: {
				pathname: process.env.NEXT_PUBLIC_API_BASE_URL + '/api/oauth2/authorize/github',
				query: {
					redirect_uri: '', //originLocation.origin + pageHomeRoute().pathname,
				},
			},
		},
		google: {
			name: 'Google',
			ico: {
				element: AiFillGoogleCircle,
				className: 'text-red-800',
			},
			route: {
				pathname: pageLoginRoute().pathname,
				query: pageLoginRoute().query,
			},
		},
	};
};

export default function LoginBox() {
	const providers = Object.values(authorizeApiAuth(window.location));

	return (
		<div className="flex flex-col items-center justify-center text-center mb-[3vh]">
			<div className="flex flex-col items-center gap-9 mt-[30px] h-auto text-black2white text-3xl font-bold mb-[2vh]">
				Zaloguj się do Kodemy
			</div>
			<div className="flex flex-col gap-5 py-4">
				{providers &&
					providers.map(({ name, ico, route }, index) => (
						<Link key={index} href={route} as={route} shallow passHref>
							<ProviderButton provider={name} ico={ico} />
						</Link>
					))}
			</div>
		</div>
	);
}
