import { GiHamburgerMenu } from 'react-icons/gi';
import { useSidebarContext } from '@/contexts/SidebarStateContext';

export default function HamburgerMenuIcoBtn() {
	const { isOpen, setIsOpen } = useSidebarContext();

	const handleToggleSidebar = () => setIsOpen(!isOpen);

	return (
		<button
			className="flex justify-center items-center h-full aspect-square"
			onClick={handleToggleSidebar}
		>
			<GiHamburgerMenu className="block h-full w-full p-1/4" />
		</button>
	);
}
