import React from 'react';
import { IconType } from 'react-icons';

export default function ProviderButton({ ico, provider }: { ico: IconType; provider: string }) {
	const iconStyle = {
		width: '3vh',
		height: 'auto',
	};

	return (
		<div className="w-full px-5 py-2 font-semibold border-2 rounded-lg cursor-pointer text-black2white hover:bg-gray-500 hover:text-white2white">
			<div className="flex justify-center items-center gap-2">
				<div className="">{React.createElement(ico, { style: iconStyle })}</div>
				<div className="">
					<h3>Zaloguj się za pomocą {provider}</h3>
				</div>
			</div>
		</div>
	);
}
