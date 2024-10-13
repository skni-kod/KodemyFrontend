import React from 'react';

export default function Button({
	children,
	onClick,
	disabled = false,
}: {
	children: React.ReactNode;
	onClick: () => void;
	disabled?: boolean;
}) {
	return (
		<button
			className="flex h-[2.5rem] cursor-pointer items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-textOnPrimary hover:bg-primaryHover"
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
