import {
	pageAdminMaterialsRoute,
	pageLogoutRoute,
	pageAdminUsersRoute,
	pageAccountSettingsRoute,
	pageAccountMaterialsRoute,
	pageAccountRoute,
} from '@/pages/route';
import AvatarMenuSeparator from '@/components/common/navbar/atoms/AvatarMenuSeparator';
import AvatarMenuButton from '@/components/common/navbar/atoms/AvatarMenuButton';
import { useAuthStore } from '@/store/authSlice';
import usePermissions from '@/hooks/usePermissions';

const AvatarDropDownMenu = ({ className }: { className: string; handleClose?: () => void }) => {
	const { user } = useAuthStore();
	const { isModerator } = usePermissions();

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
								<AvatarMenuButton value="Profil" href={pageAccountRoute()} />
								<AvatarMenuButton value="Ustawienia konta" href={pageAccountSettingsRoute()} />
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
