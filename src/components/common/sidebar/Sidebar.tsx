import { useEffect, useState } from 'react';
import clsx from 'clsx';
import useSectionService from '@/hooks/services/useSectionService';
import SidebarItem from './molecules/SidebarItem';

const Sidebar = () => {
	const [sections, setSections] = useState<Section[]>([]);
	const { getSections } = useSectionService();
	const [isExpandMenu, setIsExpandMenu] = useState(false);
	const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

	useEffect(() => {
		(async () => {
			setSections(sortSectionCategory(await getSections()));
		})();
	}, [getSections]);

	const handleExpand = (mouseEntered: boolean) => setIsExpandMenu(mouseEntered);

	return (
		<nav
			onMouseEnter={() => handleExpand(true)}
			onMouseLeave={() => handleExpand(false)}
			className={clsx(
				'hidden md:block z-10 fixed top-0 left-0 h-full pt-24 pb-5 overflow-y-auto bg-white2darkgrey text-black2white shadow-md transition-width duration-500 ease-linear',
				isExpandMenu
					? 'w-72 px-5 bg-gradient-radial'
					: 'w-18 px-5 bg-gradient-conic',
			)}
		>
			<div className="relative">
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
