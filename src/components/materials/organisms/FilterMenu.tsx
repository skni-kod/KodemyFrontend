import { materialStatusPolishVerbs } from '@/components/materials/atoms/Status';
import { defaultPages } from '@/contexts/MaterialsFiltersContext';
import Select from '@/components/materials/atoms/Select';
import PhraseInput from '@/components/materials/atoms/PhraseInput';
import { sortMenuValues } from '@/components/materials/organisms/SortMenuButton';

const FilterMenu = () => {
	const materialStatuses = materialStatusPolishVerbs();
	const sortValues = sortMenuValues.map((sort) => sort.name);

	const handlePhrase = (phrase: string | undefined) => {};

	const handlePage = (option: number) => {};

	const handleStatus = (option: number) => {};

	return (
		<>
			<h2 className="w-full mt-4 text-semibold text-[24px]">Filtry</h2>
			<div className="flex justify-start items-center w-full flex-wrap gap-4 mt-4 px-8 text-black2white">
				<div className="w-full">
					<PhraseInput
						className="w-1/2 border-2 border-gray2white focus-visible:border-gray2white"
						placeholder="Szukaj frazę"
						setCurrentValue={handlePhrase}
					/>
				</div>
				<Select
					className="border-2 border-gray2white text-center"
					label="Ilość"
					value={defaultPages}
					setCurrentValue={handlePage}
				/>
				<Select
					className="border-2 border-gray2white w-52"
					label="Sortowanie"
					value={sortValues}
					setCurrentValue={handlePage}
				/>
				<Select
					className="border-2 border-gray2white w-36"
					label="Status"
					value={materialStatuses}
					setCurrentValue={handleStatus}
				/>
			</div>
		</>
	);
};

export default FilterMenu;
