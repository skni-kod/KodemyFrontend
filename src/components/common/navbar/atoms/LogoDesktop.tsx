import Image from 'next/image';
import KodemyImageDark from '@/assets/kodemyDark.png';
import KodemyImageWhite from '@/assets/kodemyWhite.png';
import { Metadata } from '@/pages/_app';

type LogoDesktopProps = {
	width: number;
	height: number;
	theme: string;
};

const LogoDesktop = ({ width, height, theme }: LogoDesktopProps) => {
	const imageSrc = theme === 'dark' ? KodemyImageWhite : KodemyImageDark;

	return (
		<button>
			<Image
				src={imageSrc.src}
				alt={Metadata.title}
				className="cursor-pointer hidden md:block"
				width={width}
				height={height}
			/>
		</button>
	);
};

export default LogoDesktop;
