import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
	iconname: IconType;
	text: string;
}

const NotificationsOption = ({ iconname, text }: ButtonProps) => {
	const iconStyle = {
		width: '2vh',
		height: 'auto',
		color: 'var(--black2white)', // Dodaj kolor, jeśli jest potrzebny
	};

	return (
		<div className="min-w-[290px] max-w-[300px] flex items-center py-1 px-1 shadow-md border-2 rounded-2xl bg-white2darkgrey text-grey2white cursor-pointer">
			<div className="mr-2 text-black2white">
				{React.createElement(iconname, { style: iconStyle })}
			</div>
			<div className="text-black2white text-[13px]">
				<h5>{text}</h5>
			</div>
		</div>
	);
};

export default NotificationsOption;
