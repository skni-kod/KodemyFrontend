import { useEffect, useState } from 'react';
import Image from 'next/image';

import AvatarImage from '@/assets/avatar.png';

export default function UserAvatarBtn({ onClick = () => {} }: { onClick?: () => void }) {
	const [containerHeight, setContainerHeight] = useState<number | null>(null);

	useEffect(() => {
		const updateContainerHeight = () => {
			const height = document.getElementById('avatar-container')?.clientHeight || null;
			setContainerHeight(height);
		};
		updateContainerHeight();
		window.addEventListener('resize', updateContainerHeight);
		return () => {
			window.removeEventListener('resize', updateContainerHeight);
		};
	}, []);

	return (
		<div id="avatar-container" className="h-full">
			{containerHeight && (
				<Image
					src={AvatarImage}
					alt="Avatar użytkownika"
					className="h-full w-full cursor-pointer rounded-full"
					width={(containerHeight * AvatarImage.width) / AvatarImage.height}
					height={containerHeight}
					onClick={onClick}
					priority={true}
				/>
			)}
		</div>
	);
}
