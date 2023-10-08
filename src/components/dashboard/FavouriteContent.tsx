import { CategoryMaterials } from '@/mocks/categoryMock';
import { SetStateAction, SyntheticEvent, useState } from 'react';
import SectionFilters from '@/mocks/sectionFilterMock';
import FavouriteMaterialBlock from './molecules/FavouriteMaterialBlock';

const FavouriteContent = () => {
	const materials = CategoryMaterials;
	const elementsNumber = 7;
	const filterOptions = SectionFilters;
	var [filter, setFilter] = useState('wybierz filtr');
	const handleFilterChange = (e: { target: { value: SetStateAction<string> } }) => {
		setFilter(e.target.value);
	};
	return (
		<div className=" mx-4 md:mx-20">
			<h1 className="text-3xl font-semibold text-black2white">Ulubione materiały</h1>
			<div className="mx-5 flex-col sm:flex-row flex justify-between text-black2white">
				<h2>
					Znaleziono <span className="font-bold text-[var(--base-color)]">{elementsNumber}</span>{' '}
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
						<FavouriteMaterialBlock key={material.id} data={material} />
					))}
			</div>
		</div>
	);
};
export default FavouriteContent;
