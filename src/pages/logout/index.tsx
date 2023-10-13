import Page from '@/components/common/Page';
import { Metadata } from '@/pages/_app';
import Route from '@/utils/route';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const logoutApiAuth = (originLocation: Location): Route => {
	return {
		pathname: process.env.NEXT_PUBLIC_API_BASE_URL + '/api/oauth2/logout',
		query: {
			redirect_uri: '',
		},
	};
};

const Index = () => {
	const router = useRouter();
	router.push(logoutApiAuth(window.location));
	return null;
};

export default Index;
