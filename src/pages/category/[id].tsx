import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import MaterialsContent from '@/components/materials/MaterialsContent';
import Route from '@/utils/route';
import { useEffect, useState } from 'react';
import { page404Route } from '@/pages/404';

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
		<Page
			title="Lista materiałów"
			description="Spis wszystkich materiałów danej kategorii."
		>
			{/*<MaterialsFiltersProvider>*/}
			<Container className="max-w-7xl mx-auto">
				{id && <MaterialsContent categoryId={id} />}
			</Container>
			{/*</MaterialsFiltersProvider>*/}
		</Page>
	);
};

export default Id;
