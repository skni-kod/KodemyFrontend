import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import { Materials } from '@/pages/routes';
import MaterialsContent from '@/components/materials/MaterialsContent';

export const MaterialsIndexRoute = new Materials.IndexRoute('/materials');

const Index = () => {
	const router = useRouter();

	return (
		<Page
			title="Lista materiałów"
			description="Spis wszystkich materiałów danej kategorii."
		>
			<Container className="mt-28 max-w-7xl mx-auto">
				<MaterialsContent />
			</Container>
		</Page>
	);
};

export default Index;
