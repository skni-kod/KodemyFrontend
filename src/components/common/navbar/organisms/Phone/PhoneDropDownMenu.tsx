import { useEffect, useState } from 'react';
import UserBarPhone from './UserBarPhone';
import useSectionService, { Section } from '@/hooks/services/useSectionService';
import { sortSectionCategory } from '@/utils/constant';
import clsx from 'clsx';
import PhoneDropDownMenuItem from '../../molecules/PhoneDropDownMenuItem';

const PhoneDropDownMenu = () => {
	const [sections, setSections] = useState<Section[]>([]);
	const { getSections } = useSectionService();
	const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

	useEffect(() => {
		(async () => {
			setSections(sortSectionCategory(await getSections()));
		})();
	}, [getSections]);

	return (
		<div className="px-[8vw] bg-white2darkgrey h-auto w-[100%] absolute top-[63px] right-[0px] shadow-md">
			<div
				className={clsx(
					'md:hidden w-[100%] bg-white2darkgrey text-black2white px-[2vw]',
				)}
				style={{ display: 'flex', flexDirection: 'column' }}
			>
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
				<UserBarPhone />
			</div>
		</div>
	);
};

export default PhoneDropDownMenu;
