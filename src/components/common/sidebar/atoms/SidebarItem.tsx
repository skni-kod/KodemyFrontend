import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SidebarAssets from '@/components/common/sidebar/helpers/SidebarAssets';
import { Section } from '@/hooks/services/useSectionService';
import clsx from 'clsx';
import { pageCategoryIdRoute } from '@/pages/category/[id]';
import { AiOutlineRight, AiOutlineDown } from 'react-icons/ai';

interface SidebarItemProps {
	section: Section;
	isExpandMenu: boolean;
	setIsExpandMenu: Function;
	expandedItemId: number | null;
	setExpandedItemId: (id: number | null) => void;
}

const SidebarItem = ({
	section: { id, name, categories },
	isExpandMenu,
	setIsExpandMenu,
	expandedItemId,
	setExpandedItemId,
}: SidebarItemProps) => {
	const handleSectionLogo = (id: number) => {
		switch (id) {
			case 1:
				return SidebarAssets.internet;
			case 2:
				return SidebarAssets.console;
			case 3:
				return SidebarAssets.retroGame;
			case 4:
				return SidebarAssets.codingLanguage;
			default:
				return SidebarAssets.moreInfo;
		}
	};

	const isExpandSubmenu = isExpandMenu && expandedItemId === id;

	const toggleExpand = () => {
		setExpandedItemId(isExpandSubmenu ? null : id);
	};

	const handleCloseSidebar = () => {
		setExpandedItemId(null);
		setIsExpandMenu(false);
	};

	return (
		<li>
			<div
				className={clsx(
					'flex items-center justify-between w-full gap-x-2 py-1.5 mt-3 rounded-md no-underline cursor-pointer transition-all duration-300 ease-linear',
					isExpandMenu ? 'pr-3.5 pl-3' : '',
				)}
				onClick={toggleExpand}
			>
				<span className="relative inline-block min-w-12 leading-10 text-center rounded-md">
					<Image
						className="w-6 h-6 cursor-pointer"
						src={handleSectionLogo(id)}
						alt={name}
					/>
				</span>
				<div className="flex-grow">
					{isExpandMenu && (
						<div className="flex items-center justify-between">
							<span className="whitespace-nowrap overflow-hidden">{name}</span>
							<div className="flex items-center">
								{isExpandSubmenu ? <AiOutlineDown /> : <AiOutlineRight />}
							</div>
						</div>
					)}
				</div>
			</div>
			{isExpandSubmenu && (
				<ul className="p-0 list-none block">
					{categories.map(({ id, name }) => (
						<Link
							key={id}
							href={pageCategoryIdRoute(id)}
							className="flex items-center w-full px-3.5 py-1 pl-12 mt-1 rounded-lg no-underline overflow-hidden"
							onClick={() => handleCloseSidebar()}
						>
							{name}
						</Link>
					))}
				</ul>
			)}
		</li>
	);
};

export default SidebarItem;
