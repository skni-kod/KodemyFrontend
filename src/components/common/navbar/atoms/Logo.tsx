import Image from 'next/image';
import KodemyImageDark from '@/assets/kodemyDark.png';
import KodemyImageWhite from '@/assets/kodemyWhite.png';
import { Metadata } from '@/pages/_app';
import Link from 'next/link';
import { pageLoginRoute } from '@/pages';

type LogoProps = {
	width: number;
	height: number;
	theme: string;
};

const Logo = ({ width, height, theme }: LogoProps) => {
	const imageSrc = theme === 'dark' ? KodemyImageWhite : KodemyImageDark;

	return (
		<button>
			<Image
				src={imageSrc.src}
				alt={Metadata.title}
				className="cursor-pointer"
				width={width}
				height={height}
			/>
		</button>
	);
};

export default Logo;
