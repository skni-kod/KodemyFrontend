import React from 'react';
import Image from 'next/image';
import KodemyBackground from '@/assets/home/background.png';
import { Metadata } from '@/pages/_app';

const HomeBackground = () => {
	const image = KodemyBackground;
	const height = 1000;
	const width = (image.width * height) / image.height;

	return (
		<div className="absolute bottom-0 left-0 z-0">
			<Image
				className="z-0"
				src={image.src}
				alt={Metadata.title}
				width={width}
				height={height}
				priority={true}
			/>
		</div>
	);
};

export default HomeBackground;
