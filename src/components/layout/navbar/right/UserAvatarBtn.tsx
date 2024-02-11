import Image from 'next/image';
import AvatarImage from '@/assets/avatar.png';
import { useRef } from 'react';

export default function UserAvatarBtn({ onClick = () => {} }: { onClick?: () => void }) {
	const divRef = useRef<HTMLDivElement>(null);

	return (
		<div className="h-full" ref={divRef}>
			{divRef.current && (
				<Image
					src={/*user ? user.photo :*/ AvatarImage.src}
					alt="Avatar użytkownika"
					className="rounded-full cursor-pointer"
					width={(divRef.current.clientHeight * AvatarImage.width) / AvatarImage.height}
					height={divRef.current.clientHeight}
					onClick={onClick}
				/>
			)}
		</div>
	);
}
