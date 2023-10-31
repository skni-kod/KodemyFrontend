import Route from '@/utils/route';

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

export const pageAddMaterialRoute = (): Route => {
	return {
		pathname: '/addmaterial',
	};
};
