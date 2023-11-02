import { useContext, useState } from 'react';
import { MaterialsFiltersContext } from '@/contexts/MaterialsFiltersContext';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { capitalizeString } from '@/utils/constant';
import { SortDirection } from '@/utils/model';

export type SortFilter = {
	name: string;
	map: {
		sort: string;
		sortDirection: SortDirection;
	};
};

export const sortMenuValues: SortFilter[] = [
	{
		name: 'Data dodania',
		map: { sort: 'createdDate', sortDirection: SortDirection.DESC },
	},
	{
		name: 'Data dodania',
		map: { sort: 'createdDate', sortDirection: SortDirection.ASC },
	},
];

const ChangeRole = () => {
	const { addFilters } = useContext(MaterialsFiltersContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleToggleMenu = () => setIsMenuOpen((isMenuOpen) => !isMenuOpen);

	const handleSort = (filter: SortFilter) => {
		const sortFilter = {
			field: 'sort',
			value: filter.map.sort,
			lang: {
				key: 'Sortowanie',
				value: filter.name,
			},
		};
		const sortDirectionFilter = {
			field: 'sort_direction',
			value: filter.map.sortDirection,
			lang: {
				key: '',
				value: SortDirection[filter.map.sortDirection],
			},
		};
		addFilters(sortFilter, sortDirectionFilter);
	};

	const handleLiValue = (filter: SortFilter) =>
		`${filter.name}: ${capitalizeString(SortDirection[filter.map.sortDirection])}`;

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
								{handleLiValue(filter)}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default ChangeRole;
