import React from 'react';
import { Material } from '@/hooks/services/useMaterialIdService';
import MaterialWrapper from '@/components/common/page/atoms/MaterialWrapper';
import { transformRoleName } from '@/utils/transformRoleName';
import { calculateTimeDifference } from '@/utils/calculateTimeDifference';
import Route from '@/utils/route';
import AvatarImage from '@/assets/avatar.png';
import { fetchUserById } from '@/hooks/data/fetchUserById';

export const pageAccountIdRoute = (userid: number): Route => {
	const route = {
		pathname: `/account/${userid}`,
	};
	window.location.href = route.pathname;
	return route;
};

type MaterialProps = {
	userId: string;
};

const AdminUsersBlock = ({ userId }: MaterialProps) => {
	const userIdNumber = Number(userId);
	const userData = fetchUserById(userId);

	const column = 'flex flex-col p-[1vw] gap-[1.5vw] md:gap-3 text-[2vw] md:text-sm';
	const content = 'flex items-center';
	const avatarSize = 'h-[12vw] w-[12vw] 3sm:h-16 3sm:w-16';

	const handleOpenModal = (userIdNumber: number) => {
		pageAccountIdRoute(userIdNumber);
	};

	if (!userData) {
		return <div className="pl-0 md:pl-20 2xl:pl-0 text-black2white">Loading...</div>;
	}

	return (
		<MaterialWrapper onClick={() => handleOpenModal(userIdNumber)}>
			<div className="flex-none ${avatarSize} p-[1vw] md:p-1 flex justify-center items-center aspect-square bg-gray-100">
				<img
					src={userData ? userData.photo : AvatarImage.src}
					alt="Avatar użytkownika"
					className={`rounded-full ${avatarSize}`}
				/>
			</div>
			<div className="grow flex justify-between items-center px-[3vw] md:px-5">
				<div>
					<div className="text-[2.82vw] md:text-xl py-[1vw] md:py-1 text-black2white text-bold mt-0.5 text-ellipsis">
						{userData.username}
					</div>
					<div className="text-[2vw] md:text-sm py-[0.9vw] md:py-1 text-bold">
						{transformRoleName(userData.role.name)}
					</div>
				</div>
			</div>
			<div className="flex flex-col justify-center pl-[3vw] md:pl-5 border-l-2">
				<div className="text-[2vw] md:text-sm flex flex-col">
					<h1>Aktywny</h1>
					<h1>Utworzono: {calculateTimeDifference(userData.createdDate)}</h1>
					<h1>Ilość Materiałów: 0</h1>
				</div>
			</div>
		</MaterialWrapper>
	);
};

export default AdminUsersBlock;
