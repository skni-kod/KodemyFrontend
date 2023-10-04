import Image from 'next/image';
import KodemyImage from '@/assets/kodemy.png';
import { Metadata } from '@/pages/_app';

const Logo = ({ width, height }: { width: number; height: number }) => {
	return (
		<Image
			src={KodemyImage.src}
			alt={Metadata.title}
			className="cursor-pointer"
			width={width}
			height={height}
			priority={true}
		/>
	);
};

export default Logo;
