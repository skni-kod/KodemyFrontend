import React from 'react';
import Image from 'next/image';

import Background from '@/assets/home/background.png';

export default function ShowBlockImage() {
	return (
		<Image
			src={Background.src}
			alt=""
			width={Background.width}
			height={Background.height}
			style={{
				width: '100%',
				height: 'auto',
			}}
		/>
	);
}
