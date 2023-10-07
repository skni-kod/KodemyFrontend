import { pageHomeRoute, pageLoginRoute } from '@/pages';
import Link from 'next/link';

type AvatarDropDownMenuProps = {
	topPosition: string;
};
const AvatarDropDownMenu: React.FC<AvatarDropDownMenuProps> = ({
	topPosition,
}) => {
	return (
		<div
			className={`${topPosition} + bg-white2darkgrey h-[auto] w-[160px] absolute top-[80px] right-[0px] shadow-md rounded-lg p-2`}
		>
			<div className="text-black2white text-[12px] p-1">
				<a>
					<button>Ustawienia konta</button>
				</a>
				<div className="pt-1">Twoje materiały:</div>
				<button className="pl-3 pt-1">Zatwierdzone</button>
				<button className="pl-3 pt-1">Nie zatwierdzone</button>
				<button className="pl-3 pt-1">Ulubione</button>
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
