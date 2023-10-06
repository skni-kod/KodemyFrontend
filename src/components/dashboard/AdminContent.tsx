import { CategoryMaterials } from '@/mocks/categoryMock';
import { GoTriangleDown } from 'react-icons/go';
import {
	JSXElementConstructor,
	ReactElement,
	ReactFragment,
	ReactPortal,
	SetStateAction,
	SyntheticEvent,
	useState,
} from 'react';
import UserMaterialBlock from './molecules/UserMaterialBlock';
import clsx from 'clsx';
import sectionFilter from './atoms/sectionFilter';
import AdminMaterialBlock from './molecules/AdminMaterialBlock';

const AdminContent = () => {
	const materials = CategoryMaterials;
	const elementsNumber = 7;
	const filterOptions = ['Typ materiału', 'Rodzaj materiału', 'Zatwierdzone'];
	var [filter, setFilter] = useState('wybierz filtr');
	const handleFilterChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setFilter(e.target.value);
	};
	const sectionFilters = [
		'Języki programowania',
		'Gamedev',
		'Elektronika/retro',
		'Aplikacje webowe',
		'Inne',
	];
	var [section, setSection] = useState('');
	return (
		<div className="mx-4 md:mx-20">
			<h1 className="text-3xl font-semibold text-black2white">
				Niezatwierdzone
			</h1>
			<div className="lg:flex my-5 gap-5">
				{sectionFilters.map((filter) => (
					<>{sectionFilter(filter, section, setSection)}</>
				))}
			</div>
			<div className="mx-5 flex-col sm:flex-row flex justify-between text-black2white">
				<h2>
					Znaleziono{' '}
					<span className="font-bold text-black2white">{elementsNumber}</span>{' '}
					elementów.
				</h2>
				<h2>
					Filtrowanie przez:{' '}
					<span className="font-bold text-black2white">
						<select
							onSelect={() => handleFilterChange}
							className=" bg-white2verydarkgrey border-none text-left text-black2white font-semibold leading-tight focus:outline-none"
						>
							<option>{filter}</option>
							{filterOptions.map((option) => (
								<option className="p-4" label={option} />
							))}
						</select>
					</span>{' '}
				</h2>
			</div>
			<div className="flex flex-col w-full gap-4 py-4">
				{materials &&
					materials.content.map((material) => (
						<AdminMaterialBlock key={material.id} data={material} />
					))}
			</div>
		</div>
	);
};
export default AdminContent;
