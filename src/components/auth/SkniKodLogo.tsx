'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import SkniKod from '@/assets/logo/skni-kod/full_logo.png';

interface SkniKodLogoProps {
	className?: string;
	ratio?: number;
}

//ratio 1 means that we use 100% of default image size, we can use each value like 0.5 in props
export default function SkniKodLogo({ className = 'h-full w-full', ratio = 1 }: SkniKodLogoProps) {
	const [image, setImage] = useState<{ src: string; width: number; height: number }>({
		src: SkniKod.src,
		width: SkniKod.width,
		height: SkniKod.height,
	});

	/*const importImg = useMemo(() => {
		return import('@/assets/logo/skni-kod/full_logo.png');
	}, []);*/

	/*useEffect(() => {
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
				alt="Skni kod logo"
				style={{
					height: '100%',
					width: 'auto',
				}}
				priority
			/>
		</div>
	);
}
