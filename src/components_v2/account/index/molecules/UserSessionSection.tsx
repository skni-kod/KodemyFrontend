import { useState } from 'react';
import Title from '../atoms/Title';

interface UserData {
	id: string;
	username: string;
	email: string | null;
	createdDate: string;
	photo: string;
	role: {
		name: string;
	};
}

interface UserDetailsSectionProps {
	userData: UserData;
}

const UserSessionSection: React.FC<UserDetailsSectionProps> = ({ userData }) => {
	const [isEditingSession, setIsEditingSession] = useState(false);
	const isAdminOrSuperAdmin =
		userData.role.name === 'ROLE_ADMIN' || userData.role.name === 'ROLE_SUPERADMIN';

	return (
		<div className="pb-[2vw] px-[4vw] md:pb-4 md:px-9 shadow-md border-2 rounded-3xl bg-white2black text-grey2white border-grey2white ">
			<Title
				title={'Sesja'}
				isAdminOrSuperAdmin={isAdminOrSuperAdmin}
				isEditing={isEditingSession}
				setIsEditing={setIsEditingSession}
			/>
			<div className="flex justify-between items-center ">
				Strona dodycząca aktywności użytkownika
			</div>
		</div>
	);
};

export default UserSessionSection;
