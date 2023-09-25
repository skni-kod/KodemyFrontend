import SidebarItem from '@/components/common/sidebar/atoms/SidebarItem';
import Sections from '@/mocks/SectionMock';
import { useState } from 'react';
import clsx from 'clsx';

const Sidebar = () => {
	const sections = Sections;
	const [isExpandMenu, setIsExpandMenu] = useState(false);
	const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

	const handleExpand = (mouseEntered: boolean) => setIsExpandMenu(mouseEntered);

	return (
		<nav
			onMouseEnter={() => handleExpand(true)}
			onMouseLeave={() => handleExpand(false)}
			className={clsx(
				'fixed top-0 left-0 h-full pt-20 pb-5 z-100 overflow-y-scroll bg-white shadow-md transition-all duration-500 ease-linear',
				isExpandMenu ? 'w-72 px-5' : 'w-20 px-5',
			)}
		>
			<div className="relative">
				<ul className="p-0 list-none">
					{sections.map((section, index) => (
						<SidebarItem
							key={index}
							section={section}
							isExpandMenu={isExpandMenu}
							expandedItemId={expandedItemId}
							setExpandedItemId={setExpandedItemId}
						/>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Sidebar;
