import Image from "next/image";
import { metadata } from "@/pages/_document";
import KodemyImage from "@/assets/kodemy.png";

const Logo = () => {
	return (
		<Image
			src={KodemyImage.src}
			alt={metadata.title as string}
			className="cursor-pointer"
			width="155"
			height="100"
		/>
	);
};

export default Logo;