import React, { useEffect, useState } from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import AvatarImage from '@/assets/avatar.png';
import { calculateTimeDifference } from '@/utils/calculateTimeDifference';
import { transformRoleName } from '@/utils/transformRoleName';
import { fetchRoles } from '@/hooks/data/fetchRoles';
import { sendNewRole } from '@/hooks/data/sendNewRole';
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

const UserDetailsSection: React.FC<UserDetailsSectionProps> = ({ userData }) => {
	const [userRolesData, setUserRolesData] = useState<string[]>([]);
	const [isEditingProfile, setIsEditingProfile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const getRolesData = async () => {
			const rolesData = await fetchRoles();
			if (rolesData) {
				setUserRolesData(rolesData);
			}
		};
		getRolesData();
	}, []);

	const handleRoleSelect = async (index: number) => {
		setCurrentRoleIndex(index);
		setIsMenuOpen(false);
		if (userData) {
			userData.role.name = userRolesData[index];
		}
		const roleIndex = index + 1;
		if (userData) {
			await sendNewRole(userData.id, roleIndex);
		}
	};

	const isAdminOrSuperAdmin =
		userData.role.name === 'ROLE_ADMIN' || userData.role.name === 'ROLE_SUPERADMIN';

	const avatarSize = 'h-[120px] w-[120px] 3sm:h-32 3sm:w-32';

	const tab = 'ml-4';
	return (
		<div className="pb-[2vw] px-[4vw] md:pb-4 md:px-9 shadow-md border-2 rounded-3xl bg-white2black text-grey2white border-grey2white ">
			<Title
				title={'Szczegóły'}
				isAdminOrSuperAdmin={isAdminOrSuperAdmin}
				isEditing={isEditingProfile}
				setIsEditing={setIsEditingProfile}
			/>
			<div className="flex justify-between items-center">
				<div
					className={`flex-none ${avatarSize} p-[1vw] md:p-1 flex justify-center items-center aspect-square`}
				>
					<img
						src={userData && userData.photo ? userData.photo : AvatarImage.src}
						alt="Avatar użytkownika"
						className={`rounded-full flex justify-center items-center ${avatarSize}`}
					/>
				</div>
				<div className="grow flex justify-between items-center px-[3vw] md:px-5">
					<div>
						<div className="text-[2.82vw] md:text-xl py-[1vw] md:py-1 text-black2white text-bold mt-0.5 text-ellipsis">
							{userData.username}
						</div>
						<div className="text-[2vw] md:text-sm py-[0.9vw] md:py-1 text-bold">
							Email: <div className={tab}>{userData.email || 'Brak adresu email'}</div>
						</div>
						<h1 className="text-[2vw] md:text-sm py-[0.9vw] md:py-1 text-bold relative">
							Rola:
							<div className={tab}>
								{isAdminOrSuperAdmin && isEditingProfile ? (
									<>
										<button onClick={handleMenuToggle} className="pr-1">
											{transformRoleName(userData.role.name)}{' '}
										</button>
										<span className="inline-block">
											{isMenuOpen ? <RxTriangleUp /> : <RxTriangleDown />}
										</span>
										{isMenuOpen && (
											<div className="absolute right-7 top-10 w-fit z-10 bg-white2verydarkgrey mt-2">
												<ul className="max-h-none w-max m-0 p-0 overflow-auto cursor-pointer list-none border-2 rounded-lg">
													{userRolesData.map((role, index) => (
														<li key={index}>
															<button
																className="w-full h-auto 2sm:py-[0.5vw] px-2 text-left border-none bg-transparent hover:text-sky-500 cursor-pointer transition duration-300"
																onClick={() => handleRoleSelect(index)}
															>
																{transformRoleName(role)}
															</button>
														</li>
													))}
												</ul>
											</div>
										)}
									</>
								) : (
									<span>{transformRoleName(userData.role.name)}</span>
								)}
							</div>
						</h1>
						<div className="text-[2vw] md:text-sm py-[0.9vw] md:py-1 text-bold">
							Utworzono:
							<div className={tab}>{calculateTimeDifference(userData.createdDate)}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserDetailsSection;
