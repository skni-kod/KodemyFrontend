import AddMaterialIcoBtn from '@/components/layout/navbar/right/AddMaterialIcoBtn';
import NotificationIcoBtn from '@/components/layout/navbar/right/NotificationIcoBtn';
import UserAvatarBtn from '@/components/layout/navbar/right/UserAvatarBtn';
import SearchIcoBtn from '@/components/layout/navbar/right/SearchIcoBtn';
import { useState } from 'react';
import UserDropDownMenu from '@/components/menus/UserDropDownMenu';
import { useAuthStore } from '@/store/authSlice';
import Button from '@/components/utils/Button';
import { useRouter } from 'next/router';

export default function NavbarRight() {
	const { user } = useAuthStore();
	const { push } = useRouter();
	const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState<boolean>(false);

	return (
		<>
			<div className="flex items-center gap-3.5 h-full pr-1">
				<SearchIcoBtn onClick={() => {}} />
				{user ? (
					<>
						<AddMaterialIcoBtn />
						<NotificationIcoBtn onClick={() => {}} />
						<UserAvatarBtn onClick={() => setIsDropDownMenuOpen(() => !isDropDownMenuOpen)} />
					</>
				) : (
					<Button onClick={() => push('/auth')}>Zaloguj się</Button>
				)}
			</div>
			{isDropDownMenuOpen && <UserDropDownMenu onLinkClick={() => setIsDropDownMenuOpen(false)} />}
		</>
	);
}
