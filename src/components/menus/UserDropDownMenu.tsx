import UserMenuGroup from '@/components/menus/user/UserMenuGroup';
import UserMenuLink from '@/components/menus/user/UserMenuLink';
import {
	IoDocumentOutline,
	IoFileTrayOutline,
	IoLogOutOutline,
	IoPeopleOutline,
	IoPersonOutline,
	IoSettingsOutline,
} from 'react-icons/io5';
import { useEffect, useRef } from 'react';
import { useAuthStore } from '@/store/authSlice';

export default function UserDropDownMenu({ onLinkClick }: { onLinkClick: () => void }) {
	const { user } = useAuthStore();
	const ref = useRef<HTMLDivElement>(null);

	const handleClickOutside = (event: MouseEvent) => {
		ref.current && !ref.current.contains(event.target as Node) && onLinkClick();
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [handleClickOutside]);

	if (!user) return null;

	return (
		<div
			className="absolute top-full right-0 w-64 min-h-32 mt-0.5 mr-1 p-2 bg-bg text-text2bg shadow-md"
			ref={ref}
		>
			<div className="flex items-center gap-2 px-2 pt-2 pb-4">
				<div className="w-8 h-8 aspect-square bg-gray-500"></div>
				<div className="flex-1 flex flex-col">
					<div>{user.username}</div>
				</div>
			</div>
			<div className="flex flex-col px-2">
				<UserMenuGroup hidden>
					<UserMenuLink
						href={'/users/me'}
						ico={IoPersonOutline}
						label={'Konto użytkownika'}
						onClick={onLinkClick}
					/>
				</UserMenuGroup>
				<UserMenuGroup label="ZAWARTOŚĆ">
					<UserMenuLink
						href={''}
						ico={IoDocumentOutline}
						label={'Twoje materiały'}
						onClick={onLinkClick}
					/>
				</UserMenuGroup>
				<UserMenuGroup label="ADMINISTRACJA">
					<UserMenuLink
						href={'/materials/manage'}
						ico={IoFileTrayOutline}
						label={'Materiały użytkowników'}
						onClick={onLinkClick}
					/>
					<UserMenuLink
						href={'/users/manage'}
						ico={IoPeopleOutline}
						label={'Użytkownicy'}
						onClick={onLinkClick}
					/>
				</UserMenuGroup>
				<UserMenuGroup label="KONTO">
					<UserMenuLink
						href={''}
						ico={IoSettingsOutline}
						label={'Ustawienia'}
						onClick={onLinkClick}
					/>
					<UserMenuLink
						href="http://localhost:8080/api/oauth2/logout?redirect_uri=http://localhost:3000"
						ico={IoLogOutOutline}
						label={'Wyloguj'}
						onClick={onLinkClick}
						passHref
					/>
				</UserMenuGroup>
			</div>
		</div>
	);
}
