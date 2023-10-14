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
		<div className="flex items-center gap-2 min-w-[290px] max-w-[300px] py-1 px-1 text-xs shadow-md border-2 rounded-2xl bg-white2darkgrey text-black2white cursor-pointer hover:bg-gray-500 hover:text-white2white text-xs">
			<div>{React.createElement(iconname, { style: iconStyle })}</div>
			<div>
				<h5>{text}</h5>
			</div>
		</div>
	);
};

export default NotificationsOption;
