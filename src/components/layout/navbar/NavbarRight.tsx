import AddMaterialIcoBtn from '@/components/layout/navbar/right/AddMaterialIcoBtn';
import NotificationIcoBtn from '@/components/layout/navbar/right/NotificationIcoBtn';
import UserAvatarBtn from '@/components/layout/navbar/right/UserAvatarBtn';
import SearchIcoBtn from '@/components/layout/navbar/right/SearchIcoBtn';
import { useEffect, useRef, useState } from 'react';
import UserDropDownMenu from '@/components/menus/UserDropDownMenu';

export default function NavbarRight() {
	const [isDropDownMenuOpen, setIsDropDownMenuOpen] = useState<boolean>(false);
	const dropDownMenuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event: MouseEvent) => {
		if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(event.target as Node)) {
			setIsDropDownMenuOpen(false);
		}
	};

	const handleLinkClick = () => {
		setIsDropDownMenuOpen(false);
	};

	return (
		<>
			<div className="flex items-center gap-2 h-full">
				<SearchIcoBtn onClick={() => {}} />
				<AddMaterialIcoBtn onClick={() => {}} />
				<NotificationIcoBtn onClick={() => {}} />
				<UserAvatarBtn onClick={() => setIsDropDownMenuOpen(!isDropDownMenuOpen)} />
			</div>
			{isDropDownMenuOpen && (
				<UserDropDownMenu menuRef={dropDownMenuRef} onLinkClick={handleLinkClick} />
			)}
		</>
	);
}
