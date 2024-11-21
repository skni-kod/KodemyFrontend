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
					? 'cursor-not-allowed bg-secondary text-textOnPrimary'
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

type MaterialColorTypeButton = 'blue' | 'yellow' | 'green' | 'gray';

export function MaterialButton({
	children,
	onClick,
	type,
}: {
	children: React.ReactNode;
	onClick?: () => void;
	type: MaterialColorTypeButton;
}) {
	let bgColor = '';
	let textColor = '';

	switch (type) {
		case 'blue':
			bgColor = 'bg-primary';
			textColor = 'text-textOnPrimary';
			break;
		case 'yellow':
			bgColor = 'bg-grade';
			textColor = 'text-gradeText';
			break;
		case 'green':
			bgColor = 'bg-green';
			textColor = 'text-greenText';
			break;
		case 'gray':
			bgColor = 'bg-grayText';
			textColor = 'text-gray';
			break;
	}

	return (
		<button
			className={`flex h-9 items-center gap-1 rounded-xl ${bgColor} px-4 text-lg font-semibold ${textColor} `}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
