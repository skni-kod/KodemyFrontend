import { useRouter } from 'next/router';
import { pageAdminMaterialsRoute } from '@/pages/route';

const Index = () => {
	useRouter().push(pageAdminMaterialsRoute());
	return null;
};

export default Index;
