import HeaderButton from '@/components/common/page/atoms/HeaderButton';
import { useSectionsStore } from '@/store/sectionsSlice';
import { useState } from 'react';
import FilterButtonsList from '@/components/common/page/molecules/FilterButtonsList';

const currentIdsInit = {
	section: undefined,
	category: undefined,
};

const HeaderAllMaterials = ({ headName }: { headName: string }) => {
	const { sections } = useSectionsStore();
	const [currentIds, setCurrentIds] = useState<{
		section: number | undefined;
		category: number | undefined;
	}>(currentIdsInit);

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
							setCurrentIds(currentIdsInit);
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
