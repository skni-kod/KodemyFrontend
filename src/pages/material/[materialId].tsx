import Route from '@/utils/route';
import React from 'react';
import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import MaterialsFiltersProvider from '@/contexts/MaterialsFiltersContext';
import MaterialContent from '@/components/material/[materialId]';

export const pageMaterialIdRoute = (materialId: number): Route => {
	return {
		pathname: '/material/[materialId]',
		query: { materialId },
	};
};

const MaterialId = () => {
	return (
		<Page title="Materiały" description="Widok strony materiałów">
			<MaterialsFiltersProvider>
				<Container className="max-w-7xl mx-auto">
					<MaterialContent />
				</Container>
			</MaterialsFiltersProvider>
		</Page>
	);
};

export default MaterialId;
