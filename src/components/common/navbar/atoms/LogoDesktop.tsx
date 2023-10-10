import Image from 'next/image';
import KodemyImageDark from '@/assets/logo/kodemyDark.png';
import KodemyImageWhite from '@/assets/logo/kodemyWhite.png';
import { Metadata } from '@/pages/_app';
import { useThemeStore } from '@/store/themeSlice';

const LogoDesktop = ({ height, visibility }: { height: number; visibility: string }) => {
	const { themeMode } = useThemeStore();
	const image = [KodemyImageDark, KodemyImageWhite][themeMode];
	const width = (image.width * height) / image.height;

	return (
		<button>
			<Image
				src={image.src}
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
