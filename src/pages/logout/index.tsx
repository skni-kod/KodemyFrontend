import Route from '@/utils/route';
import { useRouter } from 'next/router';

const logoutApiAuth = (originPathName: string): Route => {
	return {
		pathname: process.env.NEXT_PUBLIC_API_BASE_URL + '/api/oauth2/logout',
		query: {
			redirect_uri: '',
		},
	};
};

const Index = () => {
	const router = useRouter();
	router.push(logoutApiAuth(router.asPath));
	return null;
};

export default Index;
