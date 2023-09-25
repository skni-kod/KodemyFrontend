import Image from 'next/image';
import KodemyImage from '@/assets/kodemy.png';
import { Metadata } from '@/pages/_app';
import { number } from 'prop-types';

type LogoProps = {
	width: number;
	height: number;
};

const Logo = ({ width, height }: LogoProps) => {
	return (
		<Image
			src={KodemyImage.src}
			alt={Metadata.title}
			className="cursor-pointer"
			width={width}
			height={height}
		/>
	);
};

export default Logo;
