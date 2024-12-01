'use client';
import React, { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { IconType } from 'react-icons';
import { useRouter } from 'next/navigation';
import { TEXT } from '@/utils/constant';
import useFetchState, { Status } from '@/utils/hooks/useFetchState';
import { ProviderLiResponse } from '@/services/auth/types';
import AuthService from '@/services/auth/authService';
import Loading from '@/components/common/Loading';
import Error from '@/components/common/Error';

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
					className="flex items-center gap-2 rounded-lg border border-secondary bg-bg px-4 py-2 hover:bg-bgHover hover:text-primaryHover"
				>
					{React.createElement(PROVIDERS_MAP[provider].icoType, {
						className: PROVIDERS_MAP[provider].icoColor,
						style: iconStyles,
					})}
					<h3 className="text-center text-sm md:text-base">{`${TEXT.AUTH.CONTINUE_WITH} ${provider.toUpperCase()}`}</h3>
				</button>
			))}
		</>
	);
}
