import NotificationsOption from '../atoms/NotificationsOption';

import { AiOutlineCheck } from 'react-icons/ai';
import { CiSettings } from 'react-icons/ci';

const NotificationsMenu = () => {
	const iconName1 = AiOutlineCheck;
	const text1 = 'Odznacz wszystkie jako przeczytane';
	const iconName2 = CiSettings;
	const text2 = 'Ustawienia powiadomień';

	return (
		<div className="h-[auto] w-[310px] bg-white2darkgrey absolute top-[50px] right-[40px] rounded pt-[10px] pl-[10px] shadow-md space-y-2 pb-2">
			<button>
				<NotificationsOption iconname={iconName1} text={text1} />
			</button>
			<button>
				<NotificationsOption iconname={iconName2} text={text2} />
			</button>
		</div>
	);
};

export default NotificationsMenu;
