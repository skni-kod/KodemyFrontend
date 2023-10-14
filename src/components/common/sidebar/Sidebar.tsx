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
	const navClassNameRef = useRef<string>('');

	useEffect(() => {
		navClassNameRef.current = clsx(
			'z-10 fixed top-0 left-0 h-full pt-20 pb-5 overflow-y-auto bg-white2darkgrey text-black2white shadow-md',
			isOpen ? 'w-72 px-5 bg-gradient-radial' : 'bg-gradient-conic',
			!isOpen && (windowWidth > 768 ? 'w-18 pl-5 pr-4' : 'w-0 x-0'),
			windowWidth > 768 && 'transition-width duration-500 ease-linear',
		);
	}, [isOpen, windowWidth]);

	useEffect(() => {}, []);

	const handleExpand = (mouseEntered: boolean) => windowWidth > 768 && setIsOpen(mouseEntered);

	return (
		<nav
			onMouseEnter={() => handleExpand(true)}
			onMouseLeave={() => handleExpand(false)}
			className={navClassNameRef.current}
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
