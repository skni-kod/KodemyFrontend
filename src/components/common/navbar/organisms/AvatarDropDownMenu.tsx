import { pageHomeRoute, pageLoginRoute } from '@/pages';
import Link from 'next/link';

const AvatarDropDownMenu = ({ className }: { className?: string }) => {
	return (
		<div
			className={`absolute right-5 h-auto w-40 p-2 ${className} bg-white2darkgrey shadow-md rounded-lg`}
		>
			<div className="text-black2white text-xs p-1">
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
