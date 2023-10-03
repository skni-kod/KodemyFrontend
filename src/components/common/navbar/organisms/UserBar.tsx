import { BiGrid, BiSun } from 'react-icons/bi';
import { HiOutlineMoon } from 'react-icons/hi2';
import Avatar from '@/components/common/navbar/atoms/Avatar';
import Bell from '../atoms/Bell';
import BellDropDownMenu from '../molecules/BellDropDownMenu';
import { useState } from 'react';
import AvatarDropDownMenu from '../molecules/AvatarDropDownMenu';

const UserBar = () => {
	const IconClassNames = 'cursor-pointer text-gray-400 text-2xl';

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
	const [dayNightSwitch, setdayNightSwitch] = useState(false);
	const toggleDayNightSwitch = () => {
		setdayNightSwitch(!dayNightSwitch);
	};
	return (
		<div className="flex items-center justify-between gap-x-4">
			<button className="bg-base hover:bg-blue-700 text-white text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded">
				Dodaj materiał
			</button>
			<div className="flex items-center gap-x-4 font-bold">
				<div onClick={toggleDayNightSwitch}>
					{dayNightSwitch ? (
						<BiSun className={IconClassNames} />
					) : (
						<HiOutlineMoon className={IconClassNames} />
					)}
				</div>
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
