import Image from 'next/image';
import KodemyImageDark from '@/assets/kodemyDark.png';
import KodemyImageWhite from '@/assets/kodemyWhite.png';
import { Metadata } from '@/pages/_app';

type LogoDesktopProps = {
	height: number;
	theme: string;
	visibility: string;
};
const LogoDesktop = ({ height, theme, visibility }: LogoDesktopProps) => {
	const imageSrc = theme !== 'dark' ? KodemyImageWhite : KodemyImageDark;
	const width = (imageSrc.width * height) / imageSrc.height;

	return (
		<button>
			<Image
				src={imageSrc.src}
				alt={Metadata.title}
				className={`${visibility} + cursor-pointer md:block h-none w-none`}
				width={width}
				height={height}
				priority={true}
			/>
		</button>
	);
};

export default LogoDesktop;
