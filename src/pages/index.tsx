import Favicon from '@/assets/favicon.ico';
import { Metadata } from '@/pages/_app';
import Page from '@/components/common/Page';
import Container from '@/components/common/Container';
import HomeContent from '@/components/home/HomeContent';
import Route from '@/utils/route';
import { AdminView } from '@/components/dashboard/AdminContent';

export default function Home() {
	return (
		<Page
			title="Home"
			description={Metadata.description}
			addTags={
				<>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="hight" content="width=device-width, initial-scale=1" />
					<link rel="icon" href={Favicon.src} />
				</>
			}
		>
			<Container className="max-w-7xl h-full mx-auto">
				<HomeContent />
			</Container>
		</Page>
	);
}

export const pageHomeRoute = (): Route => {
	return {
		pathname: '/',
	};
};

export const pageLoginRoute = (): Route => {
	return {
		pathname: '/login',
	};
};

export const pageLogoutRoute = (): Route => {
	return {
		pathname: '/logout',
	};
};

export const pageDashboardRoute = (): Route => {
	return {
		pathname: '/dashboard',
	};
};

export const pageDashboardUserRoute = (): Route => {
	return {
		pathname: '/dashboard/user',
	};
};

export const pageDashboardAdminRoute = (view: AdminView): Route => {
	return {
		pathname: '/dashboard/admin',
		query: {
			view: view,
		},
	};
};

export const pageDashboardFavouriteRoute = (): Route => {
	return {
		pathname: '/dashboard/favourite',
	};
};

export const pageAddMaterialRoute = (): Route => {
	return {
		pathname: '/addmaterial',
	};
};
