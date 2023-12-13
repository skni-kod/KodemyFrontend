import Route from '@/utils/route';
import Page from '@/components/common/Page';
import MaterialsFiltersProvider from '@/contexts/MaterialsFiltersContext';
import Container from '@/components/common/Container';
import CategoryContent from '@/components/category/CategoryContent';

export const pageCategoryIdRoute = (categoryId: number, pageId: number): Route => {
	return {
		pathname: '/category/[categoryId]/page/[pageId]',
		query: { categoryId, pageId },
	};
};

const CategoryPageId = () => {
	return (
		<Page title="Lista materiałów" description="Spis wszystkich materiałów danej kategorii.">
			<MaterialsFiltersProvider>
				<Container className="max-w-7xl mx-auto">
					<CategoryContent />
				</Container>
			</MaterialsFiltersProvider>
		</Page>
	);
};

export default CategoryPageId;
