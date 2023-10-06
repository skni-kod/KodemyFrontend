import { useRouter } from 'next/router';
import Container from '@/components/common/Container';
import Page from '@/components/common/Page';
import MaterialsContent from '@/components/materials/MaterialsContent';
import Route from '@/utils/route';
import Favicon from '@/assets/favicon.ico';

export const categoryIdRoute = (id: number): Route => {
	return {
		pathname: '/category/[id]',
		query: { id },
	};
};

const Id = () => {
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

export default Id;
