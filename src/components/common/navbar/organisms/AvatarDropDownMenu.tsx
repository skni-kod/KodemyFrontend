import { pageHomeRoute, pageLoginRoute } from '@/pages';
import Link from 'next/link';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';

type AvatarDropDownMenuProps = {
	topPosition: string;
};

const myCookies = new Cookies();
const cookiename = myCookies.getAll();

const AvatarDropDownMenu: React.FC<AvatarDropDownMenuProps> = ({ topPosition }) => {
	console.log('chuj' + cookiename);
	console.log('chuj');
	const isLoggedIn = myCookies.get('JSESSIONID');
	console.log(isLoggedIn);
	return (
		<div
			className={`${topPosition} + bg-white2darkgrey h-[auto] w-[160px] absolute top-[80px] right-[0px] shadow-md rounded-lg p-2`}
		>
			<div className="text-black2white text-[12px] p-1">
				<a>
					<button>Ustawienia konta</button>
				</a>
				<div className="pt-1">
					<button>Twoje materiały:</button>
					<button className="pl-3">Zatwierdzone</button>
					<button className="pl-3">Nie zatwierdzone</button>
					<button className="pl-3">Ulubione</button>
				</div>
				<div className="pt-1">
					<button>Strona Admina:</button>
					<button className="pl-3">Do Zatwierdzenia</button>
					<button className="pl-3">Zatwierdzone</button>
				</div>
			</div>
			<div className="text-black2white font-semibold text-[12px] p-1">
				{isLoggedIn ? (
					<button>
						<Link href={pageHomeRoute()}>Wyloguj się</Link>
					</button>
				) : (
					<button>
						<Link href={pageLoginRoute()}>Zaloguj się</Link>
					</button>
				)}
			</div>
		</div>
	);
};

export default AvatarDropDownMenu;
