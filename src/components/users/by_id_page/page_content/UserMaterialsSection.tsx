import React from 'react';
import UserCard from '@/components/users/by_id_page/page_content/UserCard';
import UserCardTitle from '@/components/users/by_id_page/page_content/UserCardTitle';
import UserCardBody from '@/components/users/by_id_page/page_content/UserCardBody';
import { User } from '@/services/user/types';
import { TEXT } from '@/utils/constant';

interface UserMaterialsSectionProps {
	user?: User;
}

export default function UserMaterialsSection({ user }: UserMaterialsSectionProps) {
	return (
		<UserCard>
			<UserCardTitle
				title={TEXT.USER.USER_MATERIALS}
				isAdminOrSuperAdmin={false}
				isEditing={false}
				setIsEditing={() => {}}
			/>
			<UserCardBody>
				<span className="italic text-gray">{TEXT.IMPLEMENTATION_PROCESS}</span>
			</UserCardBody>
		</UserCard>
	);
}
