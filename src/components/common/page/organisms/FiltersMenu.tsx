import { materialStatusPolishVerbs, statusDict } from '@/components/common/modal/atoms/Status';
import { defaultPageSizes, MaterialsFiltersContext } from '@/contexts/MaterialsFiltersContext';
import Select from '@/components/common/page/atoms/Select';
import PhraseInput from '@/components/common/page/atoms/PhraseInput';
import { sortMenuValues } from '@/components/common/SortMenuButton';
import { MaterialStatus } from '@/hooks/services/useMaterialIdService';
import { useContext } from 'react';
import { capitalizeString } from '@/utils/constant';
import { SortDirection } from '@/utils/model';

const sortValues = sortMenuValues.map(
	(sort) => `${sort.name}: ${capitalizeString(SortDirection[sort.map.sortDirection])}`,
);

const FiltersMenu = () => {
	const filtersContext = useContext(MaterialsFiltersContext);
	const materialStatuses = materialStatusPolishVerbs();

	const handlePhrase = (phrase: string | undefined) => {
		filtersContext.addFilters({
			field: 'phrase',
			value: phrase,
			lang: {
				key: 'Fraza',
				value: phrase,
			},
		});
	};

	const handleSize = (option: number) => {
		filtersContext.addFilters({
			field: 'size',
			value: defaultPageSizes[option],
			lang: {
				key: 'Ilość',
				value: defaultPageSizes[option],
			},
		});
	};

	const handleSort = (option: number) => {
		const sortInfo = sortMenuValues[option];
		const sortFilter = {
			field: 'sort',
			value: sortInfo.map.sort,
			lang: {
				key: 'Sortowanie',
				value: sortInfo.name,
			},
		};
		const sortDirectionFilter = {
			field: 'sort_direction',
			value: sortInfo.map.sortDirection,
			lang: {
				key: '',
				value: SortDirection[sortInfo.map.sortDirection],
			},
		};
		filtersContext.addFilters(sortFilter, sortDirectionFilter);
	};

	const handleStatus = (option: number) => {
		const status = Object.values(MaterialStatus)[option] as keyof typeof MaterialStatus;
		filtersContext.addFilters({
			field: 'status',
			value: status,
			lang: {
				key: 'Status',
				value: statusDict[MaterialStatus[status]].polishVerb,
			},
		});
	};

	return (
		<>
			<h2 className="w-full mt-2 text-semibold text-[24px]">Filtry</h2>
			<div className="flex justify-start items-center w-full flex-wrap gap-4 mt-4 px-8 text-black2white">
				<div className="w-full">
					<PhraseInput
						className="w-1/2 border-2 border-grey2white focus-visible:border-grey2white"
						placeholder="Szukaj frazę"
						setCurrentValue={handlePhrase}
					/>
				</div>
				<Select
					className="border-2 border-grey2white text-center"
					label="Ilość"
					value={defaultPageSizes}
					setCurrentValue={handleSize}
				/>
				<Select
					className="border-2 border-grey2white w-52"
					label="Sortowanie"
					value={sortValues}
					setCurrentValue={handleSort}
				/>
				<Select
					className="border-2 border-grey2white w-36"
					label="Status"
					value={materialStatuses}
					setCurrentValue={handleStatus}
				/>
			</div>
		</>
	);
};

export default FiltersMenu;
