import Image from 'next/image';
import AvatarImage from '@/assets/avatar.png';
import { useAuthStore } from '@/store/authSlice';

const Avatar = () => {
	const { user } = useAuthStore();

	return (
		<Image
			src={user ? user.photo : AvatarImage.src}
			alt="Avatar użytkownika"
			className="rounded-full cursor-pointer"
			height="35"
			width="35"
		/>
	);
};

export default Avatar;
