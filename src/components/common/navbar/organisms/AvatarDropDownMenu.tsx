import { useCheckLoginStatus } from '@/components/login/CheckLoginStatus';
import {
	pageDashboardAdminRoute,
	pageDashboardFavouriteRoute,
	pageDashboardRoute,
	pageDashboardUserRoute,
	pageHomeRoute,
	pageLoginRoute,
} from '@/pages';
import Link from 'next/link';
import { CheckPermission } from '@/components/login/CheckPermission';
import { useEffect, useState } from 'react';

type AvatarDropDownMenuProps = {
	className: string;
};

const AvatarDropDownMenu: React.FC<AvatarDropDownMenuProps> = ({ className }) => {
	const isLoggedIn = useCheckLoginStatus();

	const [userHasPermission, setUserPermission] = useState(false);

	useEffect(() => {
		CheckPermission().then((hasPermission) => {
			setUserPermission(hasPermission);
		});
	}, []);

	return (
		<div
			className={`absolute right-5 h-auto w-40 p-2 ${className} bg-white2darkgrey shadow-md rounded-lg`}
		>
			{isLoggedIn === true ? (
				<div className="text-black2white text-[12px] p-1">
					<button>
						<Link href={pageDashboardRoute()}>Ustawienia konta</Link>
					</button>

					<div className="pt-1">
						<button>
							<Link href={pageDashboardUserRoute()}>Twoje materiały:</Link>
						</button>
						<button className="pl-3">
							<Link href={pageDashboardUserRoute()}>Zatwierdzone</Link>
						</button>
						<button className="pl-3">
							<Link href={pageDashboardUserRoute()}>Nie zatwierdzone</Link>
						</button>
						<button className="pl-3">
							<Link href={pageDashboardFavouriteRoute()}>Ulubione</Link>
						</button>
					</div>
					{userHasPermission ? (
						<div className="pt-1">
							<button>
								<Link href={pageDashboardAdminRoute()}>Strona Admina:</Link>
							</button>
							<button className="pl-3">
								<Link href={pageDashboardAdminRoute()}>Do Zatwierdzenia</Link>
							</button>
							<button className="pl-3">
								<Link href={pageDashboardAdminRoute()}>Zatwierdzone</Link>
							</button>
						</div>
					) : null}
				</div>
			) : isLoggedIn === false ? null : null}

			<div className="text-black2white font-semibold text-[12px] p-1">
				{isLoggedIn === true ? (
					<button>
						<Link href="http://localhost:8181/api/oauth2/logout">Wyloguj się</Link>
					</button>
				) : isLoggedIn === false ? (
					<button>
						<Link href={pageLoginRoute()}>Zaloguj się</Link>
					</button>
				) : null}
			</div>
		</div>
	);
};

export default AvatarDropDownMenu;
