import Route from '@/utils/route';
import AvatarMenuSeparator from '@/components/common/navbar/atoms/AvatarMenuSeparator';
import AvatarMenuButton from '@/components/common/navbar/atoms/AvatarMenuButton';
import { useAuthStore } from '@/store/authSlice';
import usePermissions from '@/hooks/usePermissions';
import { useEffect, useState } from 'react';
import { fetchUserMe } from '@/hooks/data/fetchUserMe';

export const pageAccountMaterialsRoute = (): Route => {
	return {
		pathname: '/account/materials',
	};
};
export const pageAccountTabRoute = (): Route => {
	return {
		pathname: '/account/tab',
	};
};
export const pageAdminMaterialsRoute = (): Route => {
	return {
		pathname: '/admin/materials',
	};
};
export const pageAdminUsersRoute = (): Route => {
	return {
		pathname: '/admin/users/1',
	};
};
export const pageLogoutRoute = (): Route => {
	return {
		pathname: '/logout',
	};
};

interface UserData {
	id: number;
	username: string;
	email: string | null;
	createdDate: string;
	role: {
		name: string;
	};
}
export const pageAccountIdRoute = (userid: number): Route => {
	return {
		pathname: `/account/${userid}`,
	};
};

const AvatarDropDownMenu = ({ className }: { className: string; handleClose?: () => void }) => {
	const { user } = useAuthStore();
	const { isModerator } = usePermissions();
	const [userData, setUserData] = useState<UserData | null>(null);
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetchUserMe();
			if (data) {
				setUserData(data);
			}
		};
		fetchData();
	}, []);

	return (
		<div
			className={`absolute right-4 top-full h-auto w-48 p-2 ${className} bg-white2darkgrey shadow-md rounded-lg`}
		>
			<div className="text-black2white text-sm p-1">
				{user && (
					<>
						<div>
							<AvatarMenuSeparator value="Materiały" className="pb-3 px-2">
								<AvatarMenuButton value="Twoje materiały" href={pageAccountMaterialsRoute()} />
								<AvatarMenuButton value="Zakładki" href={pageAccountTabRoute()} />
							</AvatarMenuSeparator>
						</div>
						{isModerator && (
							<div>
								<AvatarMenuSeparator value="Zarządzanie" className="pb-3 px-2">
									<AvatarMenuButton value="Statusy materiałów" href={pageAdminMaterialsRoute()} />
									<AvatarMenuButton value="Użytkownicy" href={pageAdminUsersRoute()} />
								</AvatarMenuSeparator>
							</div>
						)}
						<div>
							<AvatarMenuSeparator value="Konto" className="px-2">
								<AvatarMenuButton value="Profil" href={pageAccountIdRoute(user.id)} />
								<AvatarMenuButton value="Wyloguj się" href={pageLogoutRoute()} />
							</AvatarMenuSeparator>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default AvatarDropDownMenu;
