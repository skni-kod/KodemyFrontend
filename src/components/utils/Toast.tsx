import React, { useEffect, useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface ToastProps {
	message: string;
	type: 'success' | 'danger' | 'info' | 'warning';
	durationMs: number;
	index?: number;
	onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, index, onClose }) => {
	let bgColor = '';
	let shadowColor = '';

	switch (type) {
		case 'success':
			bgColor = 'bg-green-600';
			shadowColor = 'shadow-greenShadow';
			break;
		case 'danger':
			bgColor = 'bg-red-600';
			shadowColor = 'shadow-redShadow';
			break;
		case 'info':
			bgColor = 'bg-blue-600';
			shadowColor = 'shadow-blueShadow';
			break;
		case 'warning':
			bgColor = 'bg-yellow-600';
			shadowColor = 'shadow-yellowShadow';
			break;
	}

	return (
		<div
			className={`flex flex-row items-center justify-between h-fit p-3 2xs:p-4 w-full rounded ${bgColor} ${shadowColor} text-white`}
		>
			<p key={index}>{message}</p>
			<div className="flex items-center justify-center">
				<IoIosCloseCircleOutline onClick={onClose} className="w-6 sm:w-5 h-6 sm:h-5 ml-3 cursor-pointer" />
			</div>
		</div>
	);
};

export default Toast;
