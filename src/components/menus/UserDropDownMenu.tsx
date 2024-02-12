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

export default function UserDropDownMenu({
	menuRef,
	onLinkClick,
}: {
	menuRef: React.RefObject<HTMLDivElement>;
	onLinkClick: () => void;
}) {
	return (
		<div
			className="absolute top-full right-0 w-64 min-h-32 mt-0.5 p-2 bg-bg text-text2bg shadow-md"
			ref={menuRef}
		>
			<div className="flex items-center gap-2 p-2">
				<div className="w-8 h-8 aspect-square bg-gray-500"></div>
				<div className="flex-1 flex flex-col">
					<div>Nickname</div>
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
					<UserMenuLink href={''} ico={IoLogOutOutline} label={'Wyloguj'} onClick={onLinkClick} />
				</UserMenuGroup>
			</div>
		</div>
	);
}
