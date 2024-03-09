import React from 'react';
import clsx from 'clsx';
import { Category } from '@/hooks/services/useSectionService';
import CategoryItemText from '../atoms/CategoryItemText';

const CategoryItem = ({
	category,
	setSelectedCategory,
	isSelected,
}: {
	category: Category;
	setSelectedCategory: (category: Category) => void;
	isSelected: boolean;
}) => {
	const handleClick = () => {
		setSelectedCategory(category);
	};
	const itemClasses = clsx(
		'flex text-black2white text-center px-5 py-5 border border-black2white rounded-lg mx-6 my-4',
		{
			'border-sky-500': isSelected,
		},
	);
	return (
		<div className={itemClasses} onClick={handleClick}>
			{/* {TUTAJ JEST MIEJSCE NA IMAGE DO KATEGORI} */}
			<CategoryItemText category={category} />
		</div>
	);
};

export default CategoryItem;
