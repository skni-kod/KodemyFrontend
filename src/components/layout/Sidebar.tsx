import SidebarMenu from '@/components/layout/menu/SidebarMenu';
import SidebarFooter from '@/components/layout/sidebar/SidebarFooter';

export default function Sidebar({ className }: { className?: string }) {
	return (
		<div className={className}>
			<nav className="flex flex-col w-inherit h-inherit">
				<SidebarMenu />
				<SidebarFooter />
			</nav>
		</div>
	);
}
