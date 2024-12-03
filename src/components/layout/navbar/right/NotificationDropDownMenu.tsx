import React from 'react';

interface NotificationDropDownMenuProps {
	menuClassName: string;
}

export default function NotificationDropDownMenu({ menuClassName }: NotificationDropDownMenuProps) {
	return (
		<div className={`${menuClassName} w-60 bg-bg px-2 pb-2 pt-1 text-base font-normal text-secondary shadow-md`}></div>
	);
}
