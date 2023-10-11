import { useCheckLoginStatus } from '@/components/login/CheckLoginStatus';
import {
	pageDashboardAdminRoute,
	pageDashboardFavouriteRoute,
	pageDashboardUserRoute,
	pageHomeRoute,
	pageLoginRoute,
} from '@/pages';
import checkPermission from '@/components/login/checkPermission';
import { useEffect, useState } from 'react';
import AvatarMenuSeparator from '@/components/common/navbar/atoms/AvatarMenuSeparator';
import AvatarMenuButton from '@/components/common/navbar/atoms/AvatarMenuButton';
import { AdminView } from '@/components/dashboard/AdminContent';

const AvatarDropDownMenu = ({
	className,
	handleClose = () => {},
}: {
	className: string;
	handleClose?: () => void;
}) => {
	const isLoggedIn = useCheckLoginStatus();

	const [userHasPermission, setUserPermission] = useState(false);

	useEffect(() => {
		checkPermission().then((hasPermission) => {
			setUserPermission(hasPermission);
		});
	}, []);

	return (
		<div
			className={`absolute right-4 top-full h-auto w-48 p-2 ${className} bg-white2darkgrey shadow-md rounded-lg`}
		>
			<div className="text-black2white text-xs p-1">
				{isLoggedIn && (
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
				{isLoggedIn && userHasPermission && (
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
					<AvatarMenuSeparator value={'Konto'} className="px-2">
						{!isLoggedIn ? (
							<AvatarMenuButton value="Zaloguj się" href={pageLoginRoute()} />
						) : (
							<AvatarMenuButton
								value="Wyloguj się"
								href={{
									pathname: 'http://localhost:8181/api/oauth2/logout',
									query: {
										redirect_uri: pageHomeRoute().pathname,
									},
								}}
							/>
						)}
					</AvatarMenuSeparator>
				</div>
			</div>
		</div>
	);
};

export default AvatarDropDownMenu;
