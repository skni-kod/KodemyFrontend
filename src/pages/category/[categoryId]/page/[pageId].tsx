import { useRouter } from 'next/router';
import MaterialsContent from '@/components/category/MaterialsContent';

interface CategoryPageIdProps {
	categoryId: number;
}

const CategoryPageId: React.FC<CategoryPageIdProps> = ({ categoryId }) => {
	const router = useRouter();
	const { id } = router.query;

	console.log('CategoryPageId ', categoryId);
	return (
		<div className="bg-white2darkgrey mt-16">
			<MaterialsContent categoryId={categoryId} pageId={Number(id)} />;
		</div>
	);
};

export default CategoryPageId;
