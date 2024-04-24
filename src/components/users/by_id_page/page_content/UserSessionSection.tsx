import React, { useState } from 'react';
import UserCardTitle from '@/components/users/by_id_page/page_content/UserCardTitle';
import { User } from '@/services/user/types';
import UserCardBody from '@/components/users/by_id_page/page_content/UserCardBody';
import UserCard from '@/components/users/by_id_page/page_content/UserCard';
import { TEXT } from '@/utils/constant';

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
	user: User;
}

const UserSessionSection: React.FC<UserDetailsSectionProps> = ({ user }) => {
	const [isEditingSession, setIsEditingSession] = useState(false);
	const isAdminOrSuperAdmin = user.role.name === 'ROLE_ADMIN' || user.role.name === 'ROLE_SUPERADMIN';

	return (
		<UserCard>
			<UserCardTitle
				title={TEXT.USER.USER_SESSIONS}
				isAdminOrSuperAdmin={false}
				isEditing={isEditingSession}
				setIsEditing={setIsEditingSession}
			/>
			<UserCardBody>
				<span className="italic text-gray-600">{TEXT.IMPLEMENTATION_PROCESS}</span>
			</UserCardBody>
		</UserCard>
	);
};

export default UserSessionSection;
