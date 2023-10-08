import { useState } from 'react';
import clsx from 'clsx';
import SidebarItem from './atoms/SidebarItem';
import { useSectionsStore } from '@/store/sectionsSlice';

const Sidebar = () => {
	const { sections } = useSectionsStore();
	const [isExpandMenu, setIsExpandMenu] = useState(false);
	const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

	const handleExpand = (mouseEntered: boolean) => setIsExpandMenu(mouseEntered);

	return (
		<nav
			onMouseEnter={() => handleExpand(true)}
			onMouseLeave={() => handleExpand(false)}
			className={clsx(
				'hidden md:block z-10 fixed top-0 left-0 h-full pt-20 pb-5 overflow-y-auto bg-white2darkgrey text-black2white shadow-md transition-width duration-500 ease-linear',
				isExpandMenu ? 'w-72 px-5 bg-gradient-radial' : 'w-18 pl-5 pr-4 bg-gradient-conic',
			)}
		>
			<div className="relative pt-2">
				<ul className="p-0 list-none">
					{sections &&
						sections.map((section, index) => (
							<SidebarItem
								key={index}
								section={section}
								isExpandMenu={isExpandMenu}
								setIsExpandMenu={setIsExpandMenu}
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
