import Image from 'next/image';
import KodemyImageDark from '@/assets/kodemyDark.png';
import KodemyImageWhite from '@/assets/kodemyWhite.png';
import { Metadata } from '@/pages/_app';
import { number } from 'prop-types';

type LogoProps = {
	width: number;
	height: number;
};

const Logo = ({ width, height }: LogoProps) => {
	const currentTheme = document.body.getAttribute('data-theme');
	const imageSrc = currentTheme === 'dark' ? KodemyImageDark : KodemyImageWhite;

	return (
		<Image
			src={imageSrc.src}
			alt={Metadata.title}
			className="cursor-pointer"
			width={width}
			height={height}
		/>
	);
};

export default Logo;
