import Image from 'next/image';
import AvatarImage from '@/assets/avatar.png';

const Avatar = () => {
	return (
		<Image
			src={AvatarImage.src}
			alt="User's avatar"
			className="rounded-full cursor-pointer"
			height="30"
			width="30"
		/>
	);
};

export default Avatar;
