import { GiHamburgerMenu } from 'react-icons/gi';
import KodemyLogo from '@/components/layout/navbar/left/KodemyLogo';
import HamburgerMenuIcoBtn from '@/components/layout/navbar/left/HamburgerMenuIcoBtn';

export default function NavbarLeft() {
	return (
		<div className="flex items-center h-full">
			<HamburgerMenuIcoBtn />
			<div className="h-full">
				<KodemyLogo />
			</div>
		</div>
	);
}
