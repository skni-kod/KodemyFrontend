import { useEffect, useState } from 'react';
import UserBarPhone from './UserBarPhone';
import useSectionService, { Section } from '@/hooks/services/useSectionService';
import { sortSectionCategory } from '@/utils/constant';
import clsx from 'clsx';
import PhoneDropDownMenuItem from '../../molecules/PhoneDropDownMenuItem';

const PhoneDropDownMenu = () => {
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
		<div className=" px-[8vw] bg-white2darkgrey h-[auto] w-[100%] absolute top-[63px] right-[0px] shadow-md">
			<h1 className=" text-black2white">Miejsce 1</h1>
			<h1 className=" text-black2white">Miejsce 2</h1>
			<h1 className=" text-black2white">Miejsce 3</h1>
			<h1 className=" text-black2white">Miejsce 4</h1>
			<h1 className=" text-black2white">Miejsce 5</h1>
			<div
				onMouseEnter={() => handleExpand(true)}
				onMouseLeave={() => handleExpand(false)}
				className={clsx(
					'md:hidden z-10 fixed top-0 left-0 h-full pt-24 pb-5 overflow-y-auto bg-white2darkgrey text-black2white shadow-md transition-width duration-500 ease-linear',
					isExpandMenu
						? 'w-72 px-5 bg-gradient-radial'
						: 'w-18 px-5 bg-gradient-conic',
				)}
			>
				<div className="relative">
					<ul className="p-0 list-none">
						{sections &&
							sections.map((section, index) => (
								<PhoneDropDownMenuItem
									key={index}
									section={section}
									expandedItemId={expandedItemId}
									setExpandedItemId={setExpandedItemId}
								/>
							))}
					</ul>
				</div>
			</div>

			<UserBarPhone />
		</div>
	);
};

export default PhoneDropDownMenu;
