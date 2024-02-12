import { User } from '@/hooks/services/useUserService';
import ParagraphInfo from '@/components/me/me_page/page_content/user_dropdown/mode/ParagraphInfo';
import IsActiveStatus from '@/components/admin/users_page/page_content/IsActiveStatus';
import React from 'react';

export default function DetailsModeAccount({ data: user }: { data: User }) {
	if (!user) return null;

	return (
		<div className="p-7">
			<ParagraphInfo label="Nazwa użytkownika">{user.username}</ParagraphInfo>
			<ParagraphInfo label="Email" className="pt-5">
				{user.email}
			</ParagraphInfo>
			<ParagraphInfo label="Rola" className="pt-5">
				{user.role.name}
			</ParagraphInfo>
			<ParagraphInfo label="Status" className="pt-5">
				<IsActiveStatus isActive={Math.floor(Math.random() * 2) % 2 === 0} />
			</ParagraphInfo>
		</div>
	);
}
