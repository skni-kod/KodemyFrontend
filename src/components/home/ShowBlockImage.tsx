import React from 'react';
import Image from 'next/image';

import Background from '@/assets/home/background.png';

export default function ShowBlockImage() {
	return (
		<Image
			src={Background.src}
			alt="Background Home Image"
			width={Background.width}
			height={Background.height}
			className="h-full w-auto"
		/>
	);
}
