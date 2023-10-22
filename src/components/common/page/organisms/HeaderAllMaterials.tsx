import HeaderButton from '@/components/common/page/atoms/HeaderButton';
import { useSectionsStore } from '@/store/sectionsSlice';
import { useState } from 'react';
import FilterButtonsList from '@/components/common/page/molecules/FilterButtonsList';

type CurrentIds = {
	section: number | undefined;
	category: number | undefined;
};

const currentIdsInitState: CurrentIds = {
	section: undefined,
	category: undefined,
};

const HeaderAllMaterials = ({ headName }: { headName: string }) => {
	const { sections } = useSectionsStore();
	const [currentIds, setCurrentIds] = useState<CurrentIds>(currentIdsInitState);

	const handleCategories = (id: number) =>
		sections.find((section) => section.id === id)?.categories;

	return (
		<>
			<h2 className="w-full mt-4 text-semibold text-[36px]">{headName}</h2>
			<div className="flex items-center flex-wrap sw-full gap-4 pt-4 px-4 text-xl text-semibold text-center">
				{sections && (
					<HeaderButton
						name="Wszystkie"
						selected={!currentIds.section}
						onClick={() => {
							setCurrentIds(currentIdsInitState);
						}}
					/>
				)}
				{sections &&
					sections?.map(({ id, name }) => (
						<HeaderButton
							name={name}
							key={id}
							selected={id === currentIds.section}
							onClick={() => {
								setCurrentIds({
									section: id,
									category: undefined,
								});
							}}
						/>
					))}
			</div>
			<div className="flex items-center flex-wrap sw-full gap-4 pt-4 px-4 text-xl text-semibold text-center">
				{currentIds.section && (
					<HeaderButton
						name="Wszystkie"
						selected={!currentIds.category}
						onClick={() => {
							setCurrentIds({
								...currentIds,
								category: undefined,
							});
						}}
					/>
				)}
				{currentIds.section &&
					handleCategories(currentIds.section)?.map(({ id, name }) => (
						<HeaderButton
							name={name}
							key={id}
							selected={id === currentIds.category}
							onClick={() => {
								setCurrentIds({
									...currentIds,
									category: id,
								});
							}}
						/>
					))}
			</div>
			<FilterButtonsList />
		</>
	);
};

export default HeaderAllMaterials;
