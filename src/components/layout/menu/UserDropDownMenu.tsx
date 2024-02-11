import UserMenuGroup from '@/components/layout/menu/user/UserMenuGroup';
import UserMenuLink from '@/components/layout/menu/user/UserMenuLink';
import {
	IoDocumentOutline,
	IoFileTrayOutline,
	IoLogOutOutline,
	IoPeopleOutline,
	IoPersonOutline,
	IoSettingsOutline,
} from 'react-icons/io5';

export default function UserDropDownMenu() {
	return (
		<div className="absolute top-full right-0 w-64 min-h-32 mt-0.5 p-2 bg-bg text-text2bg shadow-md">
			<div className="flex items-center gap-2 p-2">
				<div className="w-8 h-8 aspect-square bg-gray-500"></div>
				<div className="flex-1 flex flex-col">
					<div>Nickname</div>
				</div>
			</div>
			<div className="flex flex-col px-2">
				<UserMenuGroup hidden>
					<UserMenuLink href={''} ico={IoPersonOutline} label={'Konto użytkownika'} />
				</UserMenuGroup>
				<UserMenuGroup label="ZAWARTOŚĆ">
					<UserMenuLink href={''} ico={IoDocumentOutline} label={'Twoje materiały'} />
				</UserMenuGroup>
				<UserMenuGroup label="ADMINISTRACJA">
					<UserMenuLink
						href={'/materials/manage'}
						ico={IoFileTrayOutline}
						label={'Materiały użytkowników'}
					/>
					<UserMenuLink href={'/users/manage'} ico={IoPeopleOutline} label={'Użytkownicy'} />
				</UserMenuGroup>
				<UserMenuGroup label="KONTO">
					<UserMenuLink href={''} ico={IoSettingsOutline} label={'Ustawienia'} />
					<UserMenuLink href={''} ico={IoLogOutOutline} label={'Wyloguj'} />
				</UserMenuGroup>
			</div>
		</div>
	);
}
