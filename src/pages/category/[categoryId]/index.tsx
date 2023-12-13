import Page from '@/components/common/Page';
import CategoryPageId from './page/[pageId]';
import MaterialsFiltersProvider from '@/contexts/MaterialsFiltersContext';
import Container from '@/components/common/Container';

const CategoryId = () => {
	return (
		<Page title="Lista materiałów" description="Spis wszystkich materiałów danej kategorii.">
			<MaterialsFiltersProvider>
				<Container className="max-w-7xl mx-auto mt-20">
					<CategoryPageId />
				</Container>
			</MaterialsFiltersProvider>
		</Page>
	);
};

export default CategoryId;
