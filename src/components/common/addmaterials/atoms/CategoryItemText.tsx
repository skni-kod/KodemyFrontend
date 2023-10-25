import { Category } from '@/hooks/services/useSectionService';

interface CategoryItemTextProps {
	category: Category;
}

const CategoryItemText = ({ category }: CategoryItemTextProps) => {
	return (
		<div className="flex-grow flex items-center justify-between">
			<span className="whitespace-nowrap overflow-hidden">{category.name}</span>
		</div>
	);
};

export default CategoryItemText;
