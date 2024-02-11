import { GiHamburgerMenu } from 'react-icons/gi';
import PageLogo from '@/components/layout/navbar/left/PageLogo';
import HamburgerMenuIcoBtn from '@/components/layout/navbar/left/HamburgerMenuIcoBtn';

export default function NavbarLeft() {
	return (
		<div className="flex items-center h-full">
			<HamburgerMenuIcoBtn />
			<div className="h-full">
				<PageLogo />
			</div>
		</div>
	);
}
