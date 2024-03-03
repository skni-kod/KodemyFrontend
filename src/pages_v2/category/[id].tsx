import { useRouter } from 'next/router';
import Container from '@/components_v2/common/Container';
import Page from '@/components_v2/common/Page';
import MaterialsContent from '@/components_v2/category/MaterialsContent';
import Route from '@/utils/route';
import { useEffect, useState } from 'react';
import { page404Route } from '@/pages_v2/404';
import FiltersProvider from '@/contexts/FiltersContext';

export const pageCategoryIdRoute = (id: number): Route => {
	return {
		pathname: '/category/[id]',
		query: { id },
	};
};

const Id = () => {
	const [id, setId] = useState<number | undefined>(undefined);
	const router = useRouter();

	useEffect(() => {
		const { id } = router.query;
		if (typeof id === 'string') {
			if (/^[0-9]+$/.test(id)) setId(parseInt(id));
			else router.push(page404Route());
		}
	}, [router, router.query, router.asPath]);

	return (
		<Page title="Lista materiałów" description="Spis wszystkich materiałów danej kategorii.">
			<FiltersProvider>
				<Container className="max-w-7xl mx-auto">
					{id && <MaterialsContent categoryId={id} />}
				</Container>
			</FiltersProvider>
		</Page>
	);
};

export default Id;
