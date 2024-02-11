import NavbarLeft from '@/components/layout/navbar/NavbarLeft';
import NavbarRight from '@/components/layout/navbar/NavbarRight';

export default function Navbar({ className }: { className?: string }) {
	return (
		<header className={className}>
			<nav className="fixed top-0 flex justify-between items-center w-inherit h-inherit pl-2 pr-3 py-2 bg-bg text-text2bg shadow-md z-10">
				<NavbarLeft />
				<NavbarRight />
			</nav>
		</header>
	);
}
