import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

interface ToastProps {
	message: string;
	type: 'success' | 'danger' | 'info' | 'warning';
	durationMs: number;
	index?: number;
	onClose: () => void;
}

//
//how to use:
//
// directly in component when we want to use it:
//
// const { addToast } = useToast();
// const handleShowToast = () => {
// 	addToast('Testowe powiadomienie', 'info', 5000);
// };
//<button className="h-navMenu w-[100px]" onClick={handleShowToast}>
//	TestToast1
//</button>

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
			className={`flex h-fit w-full flex-row items-center justify-between rounded p-3 2xs:p-4 ${bgColor} ${shadowColor} text-white`}
		>
			<p key={index}>{message}</p>
			<div className="flex items-center justify-center">
				<IoIosCloseCircleOutline onClick={onClose} className="ml-3 h-6 w-6 cursor-pointer sm:h-5 sm:w-5" />
			</div>
		</div>
	);
};

export default Toast;
