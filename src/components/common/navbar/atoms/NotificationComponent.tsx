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
	const textColorClass = isActive
		? 'bg-sky-500 text-white mx-auto rounded-3xl px-2 py-1'
		: 'text-black2white px-2 py-1';

	return (
		<div className={`flex items-center ${className}`}>
			<h6 className={`${textColorClass} text-[14px] cursor-pointer`}>{text}</h6>
		</div>
	);
};

export default NotificationComponent;
