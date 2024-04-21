import Image from 'next/image';
import SKNIKODImage from "@/assets/logo/skni-kod/full_logo.png";
import Link from 'next/link';
import { useEffect, useState } from 'react';

//ratio 1 means that we use 100% of default image size, we can use each value like 0.5 in props
export default function KodemyLogo({ ratio = 1 }) {
	const image = SKNIKODImage;
	const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		setImgDimensions({
			width: image.width * ratio,
			height: image.height * ratio,
		});
	}, [ratio]);

	return (
		<Link href="https://kod.prz.edu.pl/" className="block h-full" target='_blank'>
			{imgDimensions.width && imgDimensions.height && (
				<Image
					src={image.src}
					alt="SKNI KOD Logo"
					className="cursor-pointer md:block"
					width={imgDimensions.width}
					height={imgDimensions.height}
					priority={true}
				/>
			)}
		</Link>
	);
}
