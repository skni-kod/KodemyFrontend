import { useEffect, useState } from 'react';
import { AuthUserRoleType, useAuthStore } from '@/store/authSlice';

interface UserPermissions {
	isModerator: boolean;
	isAdmin: boolean;
	isSuperAdmin: boolean;
}

const usePermissions = () => {
	const { user } = useAuthStore();
	const [permissions, setPermissions] = useState<UserPermissions>({
		isModerator: false,
		isAdmin: false,
		isSuperAdmin: false,
	});

	const determinePermissions = (role: AuthUserRoleType): UserPermissions => {
		const isSuperAdmin = role === AuthUserRoleType.ROLE_SUPERADMIN;
		const isAdmin = isSuperAdmin || role === AuthUserRoleType.ROLE_ADMIN;
		const isModerator = isAdmin || role === AuthUserRoleType.ROLE_MODERATOR;
		return { isModerator, isAdmin, isSuperAdmin };
	};

	useEffect(() => {
		if (user) setPermissions(determinePermissions(user.role.name));
	}, [user]);

	return permissions;
};

export default usePermissions;
