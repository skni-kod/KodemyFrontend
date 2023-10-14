import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import SidebarItem from './atoms/SidebarItem';
import { useSectionsStore } from '@/store/sectionsSlice';
import { useSidebarContext } from '@/contexts/SidebarStateContext';
import useWindowWidth from '@/hooks/useWindowWidth';

const Sidebar = () => {
	const { sections } = useSectionsStore();
	const { isOpen, setIsOpen } = useSidebarContext();
	const [expandedItemId, setExpandedItemId] = useState<number | null>(null);
	const windowWidth = useWindowWidth();
	const sidebarRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (sidebarRef.current) {
			sidebarRef.current.className = clsx(
				'z-10 fixed top-0 left-0 h-full pt-20 pb-5 overflow-y-auto bg-white2darkgrey text-black2white shadow-md',
				windowWidth > 768 && 'transition-width duration-500 ease-linear',
				isOpen ? 'bg-gradient-radial' : 'bg-gradient-conic',
				isOpen ? 'w-72 px-5' : windowWidth > 768 ? 'w-18 pl-5 pr-4' : 'w-0 px-0',
			);
		}
	}, [isOpen, windowWidth]);

	const handleExpand = (mouseEntered: boolean) => windowWidth > 768 && setIsOpen(mouseEntered);

	return (
		<nav
			onMouseEnter={() => handleExpand(true)}
			onMouseLeave={() => handleExpand(false)}
			ref={sidebarRef}
		>
			<div className="relative pt-2">
				<ul className="p-0 list-none">
					{sections &&
						sections.map((section, index) => (
							<SidebarItem
								key={index}
								section={section}
								setIsExpandMenu={setIsOpen}
								isExpandMenu={isOpen}
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
