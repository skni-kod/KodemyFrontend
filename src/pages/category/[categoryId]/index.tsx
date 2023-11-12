import { useRouter } from 'next/router';
import Page from '@/components/common/Page';
import { useEffect, useState } from 'react';
import { page404Route } from '@/pages/404';
import CategoryPageId from './page/[pageId]';
import MaterialsFiltersProvider from '@/contexts/MaterialsFiltersContext';
import Container from '@/components/common/Container';

const CategoryId = () => {
	const [id, setId] = useState<number | undefined>(undefined);
	const router = useRouter();

	useEffect(() => {
		console.log('router.query:', router.query);

		const { id } = router.query;
		if (id) {
			const parsedId = parseInt(id as string, 10);
			console.log('parsedId:', parsedId);

			if (!isNaN(parsedId)) {
				setId(parsedId);
			} else {
				router.push(page404Route());
			}
		}
	}, [router.query]);

	console.log('CategoryId ', id);

	// z jakiejś przyczyny category id jest undefined

	return (
		<Page title="Lista materiałów" description="Spis wszystkich materiałów danej kategorii.">
			<MaterialsFiltersProvider>
				<Container className="max-w-7xl mx-auto mt-20">
					{id !== undefined && <CategoryPageId categoryId={id} />}
				</Container>
			</MaterialsFiltersProvider>
		</Page>
	);
};

export default CategoryId;
