import { Category } from '@/hooks/services/useSectionService';

const CategoryItemText = ({ category }: { category: Category }) => {
	const itemClasses =
		'flex text-black2white text-center px-5 py-5 border border-black2white rounded-lg mx-6 my-4';
	return (
		<div className="flex-grow flex items-center justify-between">
			<span className="whitespace-nowrap overflow-hidden">{category.name}</span>
		</div>
	);
};

export default CategoryItemText;
