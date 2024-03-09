import Route from '@/utils/route';
import Link from 'next/link';

type AvatarMenuButtonProps = { value: string; href: Route; onClick?: () => void };
const AvatarMenuButton = ({ value, href, onClick = () => {} }: AvatarMenuButtonProps) => {
	return (
		<div className="relative flex items-center p-1 hover:text-sky-500 rounded">
			<Link className="w-full h-full" href={href} onClick={onClick}>
				{value}
			</Link>
		</div>
	);
};

export default AvatarMenuButton;
