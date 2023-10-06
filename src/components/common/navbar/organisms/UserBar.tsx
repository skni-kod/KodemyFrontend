import { AiFillPlusCircle } from 'react-icons/ai';
import Avatar from '@/components/common/navbar/atoms/Avatar';
import Bell from '../atoms/Bell';
import BellDropDownMenu from './BellDropDownMenu';
import { useState } from 'react';
import AvatarDropDownMenu from './AvatarDropDownMenu';
import DayNightMode from '../atoms/DayNightMode';

const UserBar = () => {
	const IconClassNames =
		'cursor-pointer text-grey2white text-2xl h-[25.5px] w-[25.5px]';

	const [bellOpen, setbellOpen] = useState(false);
	const toggleBell = () => {
		setavatarOpen(false);
		setbellOpen(!bellOpen);
	};

	const [avatarOpen, setavatarOpen] = useState(false);
	const toggleAvatar = () => {
		setbellOpen(false);
		setavatarOpen(!avatarOpen);
	};

	return (
		<div className="flex items-center justify-between gap-x-4">
			<button className="bg-sky-500  hover:bg-blue-600 text-white2white text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded">
				Dodaj materiał
			</button>
			<div className="flex items-center gap-x-4 font-bold">
				<DayNightMode />
				<button onClick={toggleBell}>
					<Bell className={IconClassNames} />
				</button>
				<button onClick={toggleAvatar}>
					<Avatar />
				</button>
			</div>
			{bellOpen && <BellDropDownMenu />}
			{avatarOpen && <AvatarDropDownMenu />}
		</div>
	);
};

export default UserBar;
