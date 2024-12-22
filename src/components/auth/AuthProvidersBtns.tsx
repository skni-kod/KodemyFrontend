'use client';
import React, { useEffect } from 'react';
import { IconType } from 'react-icons';
import { AiFillGithub } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import Error from '@/components/common/Error';
import Loading from '@/components/common/Loading';
import AuthService from '@/services/auth/authService';
import { ProviderLiResponse } from '@/services/auth/types';
import { TEXT } from '@/utils/constant';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { capitalize } from '@/utils/methods';

const PROVIDERS: { name: string; icoType: IconType; icoColor: string }[] = [
	{
		name: 'github',
		icoType: AiFillGithub,
		icoColor: 'text-slate-800',
	},
];

const PROVIDERS_MAP = PROVIDERS.reduce(
	(acc, provider) => {
		acc[provider.name] = {
			icoType: provider.icoType,
			icoColor: provider.icoColor,
		};
		return acc;
	},
	{} as Record<string, { icoType: IconType; icoColor: string }>,
);

const iconStyles: React.CSSProperties = {
	width: '1.75rem',
	height: 'auto',
	aspectRatio: '1 / 1',
};

export default function AuthProvidersBtns() {
	const { data: providers, status, fetch: fetchProviders } = useFetchState<ProviderLiResponse[]>();
	const router = useRouter();

	useEffect(() => fetchProviders(AuthService.getProviders), [fetchProviders]);

	if (status === Status.PENDING) return <Loading scale="small" />;
	if (status === Status.ERROR || !providers) return <Error />;

	return (
		<>
			{providers.map(({ provider, authorize }, index) => (
				<button
					key={index}
					onClick={() => router.push(authorize)}
					className="p-0.25 flex w-72 items-center rounded-lg border border-secondary bg-bg px-2 hover:bg-bgHover"
				>
					<span className="flex aspect-square h-12 items-center justify-center">
						{React.createElement(PROVIDERS_MAP[provider].icoType, {
							className: PROVIDERS_MAP[provider].icoColor,
							style: iconStyles,
						})}
					</span>
					<h3 className="text-sm md:text-base">{`${TEXT.AUTH.CONTINUE_WITH} ${capitalize(provider)}`}</h3>
				</button>
			))}
		</>
	);
}
