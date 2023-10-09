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

type AvatarDropDownMenuProps = {
	topPosition: string;
};

const AvatarDropDownMenu: React.FC<AvatarDropDownMenuProps> = ({ topPosition }) => {
	const isLoggedIn = useCheckLoginStatus();
	return (
		<div
			className={`${topPosition} + bg-white2darkgrey h-[auto] w-[160px] absolute top-[80px] right-[0px] shadow-md rounded-lg p-2`}
		>
			{isLoggedIn === true ? (
				<div className="text-black2white text-[12px] p-1">
					<a>
						<button>
							<Link href={pageDashboardRoute()}>Ustawienia konta</Link>
						</button>
					</a>
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
				</div>
			) : isLoggedIn === false ? null : null}

			<div className="text-black2white font-semibold text-[12px] p-1">
				{isLoggedIn === true ? (
					<button>
						<Link href={pageHomeRoute()}>Wyloguj się</Link>
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
