import { useRouter } from 'next/router';
import Route from '@/utils/route';

export const pageAdminMaterialsRoute = (): Route => {
	return {
		pathname: '/admin/materials',
	};
};

const Index = () => {
	useRouter().push(pageAdminMaterialsRoute());
	return null;
};

export default Index;
