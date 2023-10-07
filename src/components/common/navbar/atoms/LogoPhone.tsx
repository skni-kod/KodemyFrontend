import Image from 'next/image';
import KodemyImageDark from '@/assets/kodemyPhoneDark.png';
import KodemyImageWhite from '@/assets/kodemyPhoneWhite.png';
import { Metadata } from '@/pages/_app';

type LogoPhoneProps = {
	width: number;
	height: number;
	theme: string;
};

const LogoPhone = ({ width, height, theme }: LogoPhoneProps) => {
	const imageSrc = theme === 'dark' ? KodemyImageWhite : KodemyImageDark;
	return (
		<button>
			<Image
				src={imageSrc.src}
				alt={Metadata.title}
				className="cursor-pointer block md:hidden"
				width={width}
				height={height}
			/>
		</button>
	);
};

export default LogoPhone;
