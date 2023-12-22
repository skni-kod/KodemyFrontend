import Route from '@/utils/route';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

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

	useEffect(() => {
		router.push(logoutApiAuth(router.asPath));
	}, [router]);
	return <div className="bg-white2verydarkgrey w-screen min-h-screen"></div>;
};

export default Index;
