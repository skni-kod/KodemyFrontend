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

export const pageLogoutRoute = (): Route => {
	return {
		pathname: '/logout',
	};
};

export const pageAccountRoute = (): Route => {
	return {
		pathname: '/account',
	};
};

export const pageAccountMaterialsRoute = (): Route => {
	return {
		pathname: '/account/materials',
	};
};

export const pageAccountSettingsRoute = (): Route => {
	return {
		pathname: '/account/settings',
	};
};

export const pageAdminMaterialsRoute = (): Route => {
	return {
		pathname: '/admin/materials',
	};
};

export const pageAdminUsersRoute = (): Route => {
	return {
		pathname: '/admin/users',
	};
};

export const pageAddMaterialRoute = (): Route => {
	return {
		pathname: '/addmaterial',
	};
};
