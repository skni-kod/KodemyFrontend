import React from 'react';

type NotificationComponentProps = {
	text: string;
	isActive: boolean;
	className: string;
};

const NotificationComponent = ({
	text,
	isActive,
	className,
}: NotificationComponentProps) => {
	const textColorClass = isActive ? 'text-blue-500' : 'text-[#666]';

	return (
		<div className="">
			<h6
				className={`${className} ${textColorClass} text-[14px] cursor-pointer`}
			>
				{text}
			</h6>
		</div>
	);
};

export default NotificationComponent;
