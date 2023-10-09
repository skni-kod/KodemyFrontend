import {
	pageDashboardAdminRoute,
	pageDashboardFavouriteRoute,
	pageDashboardUserRoute,
	pageHomeRoute,
	pageLoginRoute,
} from '@/pages';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type AvatarDropDownMenuProps = {
	topPosition: string;
};

const AvatarDropDownMenu: React.FC<AvatarDropDownMenuProps> = ({ topPosition }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean | undefined>(undefined);

	useEffect(() => {
		const checkLoginStatus = async () => {
			try {
				const response = await fetch('http://localhost:8181/api/users/me');
				console.log('chujj ' + response.status);
				if (response.status === 200) {
					setIsLoggedIn(true);
				} else if (response.status === 401) {
					setIsLoggedIn(false);
				} else {
					console.error('Błąd podczas sprawdzania statusu logowania:', response.status);
				}
			} catch (error) {
				console.error('Błąd podczas sprawdzania statusu logowania:', error);
			}
		};
		checkLoginStatus();
	}, []);
	console.log('chujjjjj ' + isLoggedIn);
	return (
		<div
			className={`${topPosition} + bg-white2darkgrey h-[auto] w-[160px] absolute top-[80px] right-[0px] shadow-md rounded-lg p-2`}
		>
			<div className="text-black2white text-[12px] p-1">
				<a>
					<button>Ustawienia konta</button>
				</a>
				<div className="pt-1">
					<button>
						<Link href={pageDashboardUserRoute()}>Twoje materiały:</Link>
					</button>
					<button className="pl-3">Zatwierdzone</button>
					<button className="pl-3">Nie zatwierdzone</button>
					<button className="pl-3">
						<Link href={pageDashboardFavouriteRoute()}>Ulubione</Link>
					</button>
				</div>
				<div className="pt-1">
					<button>
						<Link href={pageDashboardAdminRoute()}>Strona Admina:</Link>
					</button>
					<button className="pl-3">Do Zatwierdzenia</button>
					<button className="pl-3">Zatwierdzone</button>
				</div>
			</div>
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
