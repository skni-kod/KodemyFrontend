import Image from 'next/image';
import KodemyImageDark from '@/assets/kodemyDark.png';
import KodemyImageWhite from '@/assets/kodemyWhite.png';
import { Metadata } from '@/pages/_app';
import { number } from 'prop-types';
import { useEffect, useState } from 'react';

type LogoProps = {
	width: number;
	height: number;
};

const Logo = ({ width, height }: LogoProps) => {
	const [theme, setTheme] = useState<string>('light');

	useEffect(() => {
		const dataTheme = document.body.getAttribute('data-theme');
		console.log(dataTheme);

		if (dataTheme === 'light' || dataTheme === 'dark') {
			setTheme(dataTheme);
		}
	}, []);

	const imageSrc = theme === 'light' ? KodemyImageWhite : KodemyImageDark;

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
