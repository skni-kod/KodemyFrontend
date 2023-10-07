import Image from 'next/image';
import KodemyImageDark from '@/assets/kodemyPhoneDark.png';
import KodemyImageWhite from '@/assets/kodemyPhoneWhite.png';
import { Metadata } from '@/pages/_app';

type LogoPhoneProps = {
	height: number;
	theme: string;
};

const LogoPhone = ({ height, theme }: LogoPhoneProps) => {
	const imageSrc = theme === 'dark' ? KodemyImageWhite : KodemyImageDark;
	const width = (imageSrc.width * height) / imageSrc.height;
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
