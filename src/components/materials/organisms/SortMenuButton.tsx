import { useState } from 'react';
import { SortDirection } from '@/contexts/MaterialsFiltersContext';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';

type SortFilter = {
	name: string;
	sort: string;
	sort_direction: SortDirection;
};

export const sortMenuValues: SortFilter[] = [
	{
		name: 'Data dodania: DESC',
		sort: 'createdDate',
		sort_direction: SortDirection.DESC,
	},
	{
		name: 'Data dodania: ASC',
		sort: 'createdDate',
		sort_direction: SortDirection.ASC,
	},
];

const SortMenuButton = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleToggleMenu = () => {
		setIsMenuOpen((isMenuOpen) => !isMenuOpen);
	};

	const handleSort = (filter: SortFilter) => {};

	return (
		<div className="relative cursor-pointer" onClick={handleToggleMenu}>
			<div className="flex items-center cursor-pointer p-2">
				Sortuj {isMenuOpen ? <RxTriangleUp /> : <RxTriangleDown />}
			</div>
			{isMenuOpen && (
				<div className="absolute left-0 top-full w-fit z-10 bg-white2verydarkgrey">
					<ul className="max-h-none w-max m-0 p-0 overflow-auto cursor-pointer list-none">
						{sortMenuValues.map((filter, index) => (
							<li
								key={index}
								className="m-0 p-2.5 pl-4 hover:bg-gray-500 hover:text-white2white"
								onClick={() => handleSort(filter)}
							>
								{filter.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SortMenuButton;
