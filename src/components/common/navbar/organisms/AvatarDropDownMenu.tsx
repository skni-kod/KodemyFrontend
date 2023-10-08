import { pageHomeRoute, pageLoginRoute } from '@/pages';
import Link from 'next/link';

type AvatarDropDownMenuProps = {
	topPosition: string;
};
const AvatarDropDownMenu: React.FC<AvatarDropDownMenuProps> = ({ topPosition }) => {
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
				<button>
					<Link href={pageHomeRoute()}>Wyloguj się</Link>
				</button>
			</div>
			<div className="text-black2white font-semibold text-[12px] p-1">
				<button>
					<Link href={pageLoginRoute()}>Zaloguj się</Link>
				</button>
			</div>
		</div>
	);
};

export default AvatarDropDownMenu;
