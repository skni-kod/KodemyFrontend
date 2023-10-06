import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
	iconname: IconType;
	companyname: string;
}

export default function Button({ iconname, companyname }: ButtonProps) {
	const iconStyle = {
		width: '7vh',
		height: 'auto',
		color: 'var(--black2white)', // Dodaj kolor, jeśli jest potrzebny
	};

	return (
		<div className="mt-[0.5vh] mb-[0.5vh] h-auto flex bg-none border-2 border-black2white rounded-20 backdrop-blur-20 cursor-pointer">
			<div className="w-1/4 bg-none flex items-center mx-auto">
				{React.createElement(iconname, { style: iconStyle })}
			</div>
			<div className="w-3/4 bg-none flex justify-center items-center border-l border-black2white text-black2white text-center text-xs sm:text-lg">
				<h3>Zaloguj się za pomocą {companyname}</h3>
			</div>
		</div>
	);
}
