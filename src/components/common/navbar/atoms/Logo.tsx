import Image from 'next/image';
import KodemyImageDark from '@/assets/kodemyDark.png';
import KodemyImageWhite from '@/assets/kodemyWhite.png';
import { Metadata } from '@/pages/_app';

type LogoProps = {
	width: number;
	height: number;
	theme: string;
};

const Logo = ({ width, height, theme }: LogoProps) => {
	const imageSrc = theme === 'dark' ? KodemyImageWhite : KodemyImageDark;

	return (
		<button>
			<a href="/">
				<Image
					src={imageSrc.src}
					alt={Metadata.title}
					className="cursor-pointer"
					width={width}
					height={height}
				/>
			</a>
		</button>
	);
};

export default Logo;
