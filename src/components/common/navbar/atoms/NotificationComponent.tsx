import React from 'react';

type NotificationComponentProps = {
	text: string;
	isActive: boolean;
	className: string;
	amount: string;
};

const NotificationComponent = ({
	text,
	isActive,
	className,
	amount,
}: NotificationComponentProps) => {
	const textColorClass = isActive ? 'text-blue-500' : 'text-[#666]';
	const backgroundColorClass = isActive ? 'bg-blue-500' : 'bg-[#ccc]';

	return (
		<div className={`flex items-center ${className}`}>
			<h6 className={`${textColorClass} text-[14px] underline cursor-pointer`}>
				{text}
			</h6>
			<div
				className={`h-3 w-4 text-[#fff] text-[10px] m-1 rounded flex items-center justify-center ${backgroundColorClass}`}
			>
				{amount}
			</div>
		</div>
	);
};

export default NotificationComponent;
