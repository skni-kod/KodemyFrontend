import Image from 'next/image';
import KodemyImageDark from '@/assets/logo/dark/kodemyBig.png';
import KodemyImageWhite from '@/assets/logo/white/kodemyBig.png';
import { Metadata } from '@/pages/_app';
import { useThemeStore } from '@/store/themeSlice';

const LogoDesktop = ({ height }: { height: number }) => {
	const { themeMode } = useThemeStore();
	const image = [KodemyImageDark, KodemyImageWhite][themeMode];
	const width = (image.width * height) / image.height;

	return (
		<button>
			<Image
				src={image.src}
				alt={Metadata.title}
				className="cursor-pointer md:block"
				width={width}
				height={height}
				priority={true}
			/>
		</button>
	);
};

export default LogoDesktop;
