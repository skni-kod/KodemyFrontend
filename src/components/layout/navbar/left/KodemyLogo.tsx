import Image from 'next/image';
import KodemyImageDark from '@/assets/logo/dark/kodemyBig.png';
import KodemyImageWhite from '@/assets/logo/white/kodemyBig.png';
import { Metadata } from '@/pages/_app';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function KodemyLogo() {
	const image = [KodemyImageDark, KodemyImageWhite][0];
	const btnRef = useRef<HTMLAnchorElement>(null);
	const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		if (btnRef.current) {
			setImgDimensions({
				width: (btnRef.current.clientHeight * image.width) / image.height,
				height: btnRef.current.clientHeight,
			});
		}
	}, [btnRef.current]);

	return (
		<Link href="/" className="block h-full" ref={btnRef}>
			{imgDimensions.width && imgDimensions.height && (
				<Image
					src={image.src}
					alt={Metadata.title.default}
					className="cursor-pointer md:block"
					width={imgDimensions.width}
					height={imgDimensions.height}
					priority={true}
				/>
			)}
		</Link>
	);
}
