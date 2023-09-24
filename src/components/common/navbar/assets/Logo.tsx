import Image from "next/image";
import KodemyImage from "@/assets/kodemy.png";
import { Metadata } from "@/pages/_app"

const Logo = () => {
	return (
		<Image
			src={KodemyImage.src}
			alt={Metadata.title}
			className="cursor-pointer"
			width="155"
			height="100"
		/>
	);
};

export default Logo;