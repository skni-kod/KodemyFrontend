import React from 'react';
import { IconType } from 'react-icons';

const ProviderButton = ({
	ico: { element: ico, className },
	provider,
}: {
	ico: { element: IconType; className?: string };
	provider: string;
}) => {
	const iconStyle = {
		width: '4vh',
		height: 'auto',
	};

	return (
		<div className="w-full px-5 py-2.5 font-semibold border-2 rounded-lg cursor-pointer text-black2white hover:border-sky-500 hover:text-sky-500">
			<div className="flex justify-center items-center gap-2">
				<div className={className}>{React.createElement(ico, { style: iconStyle })}</div>
				<div>
					<h3>Zaloguj się za pomocą {provider}</h3>
				</div>
			</div>
		</div>
	);
};

export default ProviderButton;
