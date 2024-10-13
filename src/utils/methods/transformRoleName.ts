export default function transformRoleName(role: string) {
	switch (role) {
		case 'ROLE_USER':
			return 'Użytkownik';
		case 'ROLE_MODERATOR':
			return 'Moderator';
		case 'ROLE_ADMIN':
			return 'Admin';
		case 'ROLE_SUPERADMIN':
			return 'SuperAdmin';
		default:
			return role;
	}
}
