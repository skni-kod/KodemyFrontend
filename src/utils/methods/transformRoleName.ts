import { TEXT } from '@/utils/constant';

export default function transformRoleName(role: string) {
	switch (role) {
		case 'ROLE_USER':
			return TEXT.USER.ROLES.ROLE_USER;
		case 'ROLE_MODERATOR':
			return TEXT.USER.ROLES.ROLE_MODERATOR;
		case 'ROLE_ADMIN':
			return TEXT.USER.ROLES.ROLE_ADMIN;
		case 'ROLE_SUPERADMIN':
			return TEXT.USER.ROLES.ROLE_SUPERADMIN;
		default:
			return TEXT.USER.ROLES.UNKNOWN;
	}
}
