import {
	pageDashboardAdminRoute,
	pageDashboardFavouriteRoute,
	pageDashboardRoute,
	pageDashboardUserRoute,
	pageLogoutRoute
} from '@/pages';
import AvatarMenuSeparator from '@/components/common/navbar/atoms/AvatarMenuSeparator';
import AvatarMenuButton from '@/components/common/navbar/atoms/AvatarMenuButton';
import { AdminView } from '@/components/dashboard/AdminContent';
import { useAuthStore } from '@/store/authSlice';

const AvatarDropDownMenu = ({
	className,
	handleClose = () => {},
}: {
	className: string;
	handleClose?: () => void;
}) => {
	const { isAuth, isUserHasPermission } = useAuthStore();

	return (
		<div
			className={`absolute right-4 top-full h-auto w-48 p-2 ${className} bg-white2darkgrey shadow-md rounded-lg`}
		>
			<div className="text-black2white text-xs p-1">
				{isAuth() && (
					<div>
						<AvatarMenuSeparator value="Twoje materiały" className="pb-3 px-2">
							<AvatarMenuButton
								value="Zatwierdzone"
								href={pageDashboardUserRoute()}
								onClick={handleClose}
							/>
							<AvatarMenuButton value="Nie zatwierdzone" href={pageDashboardUserRoute()} />
							<AvatarMenuButton value="Ulubione" href={pageDashboardFavouriteRoute()} />
						</AvatarMenuSeparator>
					</div>
				)}
				{isAuth() &&
					{
						/*isUserHasPermission(false, true, true)*/
					} && (
						<div>
							<AvatarMenuSeparator value={'Zarządzanie'} className="pb-3 px-2">
								<AvatarMenuButton
									value="Oczekujące"
									href={pageDashboardAdminRoute(AdminView.MATERIALS_PENDING)}
								/>
								<AvatarMenuButton
									value="Zatwierdzone"
									href={pageDashboardAdminRoute(AdminView.MATERIALS_APPROVED)}
								/>
							</AvatarMenuSeparator>
						</div>
					)}
				<div>
					{isAuth() && (
						<AvatarMenuSeparator value={'Konto'} className="px-2">
							<AvatarMenuButton value="Ustawienia konta" href={pageDashboardRoute()} />
							<AvatarMenuButton value="Wyloguj się" href={pageLogoutRoute()} />
						</AvatarMenuSeparator>
					)}
				</div>
			</div>
		</div>
	);
};

export default AvatarDropDownMenu;
