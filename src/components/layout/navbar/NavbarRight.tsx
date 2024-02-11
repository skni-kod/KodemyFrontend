import AddMaterialIcoBtn from '@/components/layout/navbar/right/AddMaterialIcoBtn';
import NotificationIcoBtn from '@/components/layout/navbar/right/NotificationIcoBtn';
import UserAvatarBtn from '@/components/layout/navbar/right/UserAvatarBtn';
import SearchIcoBtn from '@/components/layout/navbar/right/SearchIcoBtn';
import { useState } from 'react';
import UserDropDownMenu from '@/components/layout/menu/UserDropDownMenu';

export default function NavbarRight() {
	const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState<boolean>(false);

	return (
		<>
			<div className="flex items-center gap-2 h-full">
				<SearchIcoBtn onClick={() => {}} />
				<AddMaterialIcoBtn onClick={() => {}} />
				<NotificationIcoBtn onClick={() => {}} />
				<UserAvatarBtn onClick={() => setIsDropDownMenuOpen((prev) => !prev)} />
			</div>
			{isDropDownMenuOpen && <UserDropDownMenu />}
		</>
	);
}
