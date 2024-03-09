import Image from 'next/image';
import KodemyImageDark from '@/assets/logo/kodemyPhoneDark.png';
import KodemyImageWhite from '@/assets/logo/kodemyPhoneWhite.png';
import { Metadata } from '@/pages/_app';
import { useThemeStore } from '@/store/themeSlice';

const LogoPhone = ({ height }: { height: number }) => {
	const { themeMode } = useThemeStore();
	const imageSrc = [KodemyImageDark, KodemyImageWhite][themeMode];
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
