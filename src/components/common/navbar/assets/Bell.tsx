import React from 'react';
import Image from 'next/image';
import BellImage from '@/assets/bell.png';

interface BellProps {
	isActive: boolean;
	value: number;
}

const Bell: React.FC<BellProps> = ({ isActive, value }) => {
	return (
		<Image
			src={BellImage.src}
			alt=""
			className="rounded-full cursor-pointer"
			width="30"
			height="30"
		/>
	);
};

export default Bell;
