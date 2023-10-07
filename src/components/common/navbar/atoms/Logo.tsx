import Image from 'next/image';
import KodemyImageDark from '@/assets/kodemyDark.png';
import KodemyImageWhite from '@/assets/kodemyWhite.png';
import { Metadata } from '@/pages/_app';

type LogoProps = {
	height: number;
	theme: string;
};

const Logo = ({ height, theme }: LogoProps) => {
	const imageSrc = theme === 'dark' ? KodemyImageWhite : KodemyImageDark;
	const width = (imageSrc.width * height) / imageSrc.height;

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
