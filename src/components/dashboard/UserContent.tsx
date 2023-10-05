import { CategoryMaterials } from '@/mocks/categoryMock';
import MaterialBlock from '../materials/molecules/MaterialBlock';
import { GoTriangleDown } from 'react-icons/go';
import { SetStateAction, SyntheticEvent, useState } from 'react';

const UserContent = () => {
	const materials = CategoryMaterials;
	const elementsNumber = 7;
	const filterOptions = ['Typ materiału', 'Rodzaj materiału', 'Zatwierdzone'];
	var [filter, setFilter] = useState('wybierz filtr');
	const handleFilterChange = (e: {
		target: { value: SetStateAction<string> };
	}) => {
		setFilter(e.target.value);
	};

	return (
		<div className="mx-4">
			<h1 className="text-3xl font-semibold">Twoje materiały</h1>
			<div className="mx-5 flex-col sm:flex-row flex justify-between">
				<h2>
					Znaleziono{' '}
					<span className="font-bold text-[var(--base-color)]">
						{elementsNumber}
					</span>{' '}
					elementów.
				</h2>
				<h2>
					Filtrowanie przez:{' '}
					<span className="font-bold text-[var(--base-color)]">
						<select
							onSelect={() => handleFilterChange}
							className=" bg-transparent border-none text-[var(--base-color)] font-semibold leading-tight focus:outline-none"
						>
							<option>{filter}</option>
							{filterOptions.map((option) => (
								<option className="p-2" label={option} />
							))}
						</select>
					</span>{' '}
				</h2>
			</div>
			<div className="flex flex-col w-full gap-4 py-4">
				{materials &&
					materials.content.map((material) => (
						<MaterialBlock key={material.id} data={material} />
					))}
			</div>
		</div>
	);
};
export default UserContent;
