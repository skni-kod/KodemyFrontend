import React from 'react';

type NotificationComponentProps = {
	text: string;
	isActive: boolean;
	amount: string;
};

const NotificationComponent = ({ text, isActive }: NotificationComponentProps) => {
	const textColorClass = isActive
		? 'bg-sky-500 text-white mx-auto rounded-t-xl'
		: 'text-black2white';

	return (
		<div className={`flex items-center`}>
			<h6 className={`${textColorClass} px-3 py-2 text-[14px] cursor-pointer`}>{text}</h6>
		</div>
	);
};

export default NotificationComponent;
