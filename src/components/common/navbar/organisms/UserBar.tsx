import { BiBell, BiGrid, BiSun } from 'react-icons/bi';
import Avatar from '@/components/common/navbar/atoms/Avatar';
import Bell from '../atoms/Bell';

const UserBar = () => {
	const IconClassNames = 'cursor-pointer text-gray-400 text-2xl';

	return (
		<div className="flex items-center justify-between gap-x-4">
			<button className="bg-base hover:bg-blue-700 text-white text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded">
				Dodaj materiał
			</button>
			<div className="flex items-center gap-x-4 font-bold">
				<BiSun className={IconClassNames} />
				<Bell className={IconClassNames} />
				<Avatar />
			</div>
		</div>
	);
};

export default UserBar;
