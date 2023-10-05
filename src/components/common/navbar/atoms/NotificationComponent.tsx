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
	const textColorClass = isActive ? 'text-blue' : 'text-black2white';
	const backgroundColorClass = isActive ? 'bg-blue-500' : 'bg-icon';
	const boxtextColorClass = isActive ? 'text-white' : 'text-white2darkgrey';

	return (
		<div className={`flex items-center ${className}`}>
			<h6 className={`${textColorClass} text-[14px] underline cursor-pointer`}>
				{text}
			</h6>
			<div
				className={`h-3 w-4 text-[10px] m-1 rounded flex items-center justify-center ${boxtextColorClass} ${backgroundColorClass}`}
			>
				{amount}
			</div>
		</div>
	);
};

export default NotificationComponent;
