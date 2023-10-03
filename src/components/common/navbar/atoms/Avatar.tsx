import Image from 'next/image';
import AvatarImage from '@/assets/avatar.png';

const Avatar = () => {
	return (
		<Image
			src={AvatarImage.src}
			alt="Avatar użytkownika"
			className="rounded-full cursor-pointer"
			height="35"
			width="35"
		/>
	);
};

export default Avatar;
