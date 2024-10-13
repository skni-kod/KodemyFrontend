'use client';
import React, { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Kodemy from '@/assets/logo/dark/kodemyBig.png';

type KodemyLogoProps = {
	className?: string;
	ratio?: number;
};

export default function KodemyLogo({ className = 'h-full w-full', ratio = 1 }: KodemyLogoProps) {
	const [image, setImage] = useState<{ src: string; width: number; height: number }>({
		src: Kodemy.src,
		width: Kodemy.width,
		height: Kodemy.height,
	});

	/*const importImg = useMemo(() => {
		return import('@/assets/logo/dark/kodemyBig.png');
	}, []);

	useEffect(() => {
		importImg.then(({ default: { src, width, height } }) => {
			setImage({ src, width: clientHeight * (width / height) * ratio, height: clientHeight * ratio });
		});
	}, [importImg, ratio]);*/

	return (
		<div className={className}>
			<Image
				src={image.src}
				width={image.width}
				height={image.height}
				alt="Logo strony"
				style={{
					height: '100%',
					width: 'auto',
				}}
				priority
			/>
		</div>
	);
}
