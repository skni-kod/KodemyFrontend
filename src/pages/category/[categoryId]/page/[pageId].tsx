import { useRouter } from 'next/router';
import MaterialsContent from '@/components/category/MaterialsContent';
import Route from '@/utils/route';

export const pageCategoryIdRoute = (categoryId: number, pageId: number): Route => {
	return {
		pathname: '/category/[categoryId]/page/[pageId]',
		query: { categoryId, pageId },
	};
};

const CategoryPageId = () => {
	const router = useRouter();
	const { pageId } = router.query;
	const { categoryId } = router.query;

	return (
		<div className="bg-white2darkgrey mt-16">
			<MaterialsContent categoryId={Number(categoryId)} pageId={Number(pageId)} />;
		</div>
	);
};

export default CategoryPageId;
