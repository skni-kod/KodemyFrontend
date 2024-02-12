import Image from 'next/image';
import KodemyImageDark from '@/assets/logo/dark/kodemyBig.png';
import KodemyImageWhite from '@/assets/logo/white/kodemyBig.png';
import { Metadata } from '@/pages/_app';
import { useRef } from 'react';
import Link from 'next/link';

export default function KodemyLogo() {
	const image = [KodemyImageDark, KodemyImageWhite][0];
	const btnRef = useRef<HTMLAnchorElement>(null);

	return (
		<Link href={''} className="block h-full" ref={btnRef}>
			{btnRef.current && (
				<Image
					src={image.src}
					alt={Metadata.title}
					className="cursor-pointer md:block"
					width={(btnRef.current.clientHeight * image.width) / image.height}
					height={btnRef.current.clientHeight}
					priority={true}
				/>
			)}
		</Link>
	);
}
