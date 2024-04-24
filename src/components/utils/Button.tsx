import React from 'react';

export default function Button({
	children,
	onClick,
	disabled = false,
	style = {},
}: {
	children: React.ReactNode;
	onClick: () => void;
	disabled?: boolean;
	style?: React.CSSProperties;
}) {
	return (
		<button
			className={`flex h-[2.5rem] items-center rounded-md px-4 py-2 text-sm font-semibold ${
				disabled
					? 'cursor-not-allowed bg-gray-300 text-textOnPrimary'
					: 'cursor-pointer bg-primary text-textOnPrimary hover:bg-primaryHover'
			}`}
			style={style}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
