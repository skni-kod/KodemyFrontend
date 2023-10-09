import { pageLoginRoute } from '@/pages';
import Link from 'next/link';

const RedirectionButton = () => {
	return (
		<div className="flex flex-col m-2">
			<div className="h-[auto] flex items-center justify-center">
				<h1 className="text-black2white text-[20px]">Musisz się zalogować</h1>
			</div>
			<div className="h-[auto] pt-4 flex items-center justify-center">
				<button className="bg-sky-500 hover:bg-blue-600 text-white2white text-[11px] lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded">
					<Link href={pageLoginRoute()}>Zaloguj się</Link>
				</button>
			</div>
		</div>
	);
};

export default RedirectionButton;
