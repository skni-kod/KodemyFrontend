import React from 'react';
import MaterialWrapper from '@/components/common/page/atoms/MaterialWrapper';
import { transformRoleName } from '@/utils/transformRoleName';
import { calculateTimeDifference } from '@/utils/calculateTimeDifference';
import Route from '@/utils/route';
import AvatarImage from '@/assets/avatar.png';
import { fetchUserById } from '@/hooks/data/fetchUserById';
import { AiOutlineArrowRight } from 'react-icons/ai';

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

	const avatarSize = 'h-[9vw] w-[9vw] 3sm:h-12 3sm:w-12';

	const handleOpenModal = (userIdNumber: number) => {
		pageAccountIdRoute(userIdNumber);
	};

	if (!userData) {
		return <div className="pl-0 md:pl-20 2xl:pl-0 text-black2white">Loading...</div>;
	}

	return (
		<MaterialWrapper onClick={() => handleOpenModal(userIdNumber)}>
			<div className="flex-none ${avatarSize} p-[1vw] md:p-1 flex justify-center items-center aspect-square">
				<img
					src={userData ? userData.photo : AvatarImage.src}
					alt="Avatar użytkownika"
					className={`rounded-full flex justify-center items-center ${avatarSize}`}
				/>
			</div>
			<div className="grow flex justify-between items-center px-[3vw] md:px-5">
				<div>
					<span className="w-auto text-[2.82vw] md:text-xl py-[1vw] md:py-1 text-black2white text-bold mt-0.5 text-ellipsis">
						{userData.username}
					</span>
					<span className="w-auto text-[2vw] pl-4 md:text-sm py-[0.9vw] md:py-1 text-bold">
						({transformRoleName(userData.role.name)})
					</span>
				</div>
				<div className="flex items-center gap-1">
					<span className="bg-green-300 w-2 h-2 rounded-md"></span>
					<h1>Aktywny</h1>
				</div>
			</div>
			<AiOutlineArrowRight />
		</MaterialWrapper>
	);
};

export default AdminUsersBlock;
