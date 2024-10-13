import React, { useEffect, useState } from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import AvatarImage from '@/assets/avatar.png';
import Title from '@/components/users/by_id_page/page_content/Title';

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

function transformRoleName(role: string) {
	switch (role) {
		case 'ROLE_USER':
			return 'Użytkownik';
		case 'ROLE_MODERATOR':
			return 'Moderator';
		case 'ROLE_ADMIN':
			return 'Admin';
		case 'ROLE_SUPERADMIN':
			return 'SuperAdmin';
		default:
			return role;
	}
}

function calculateTimeDifference(createdDate: string) {
	const currentDate = new Date();
	const creationDate = new Date(createdDate);
	const timeDifference = currentDate.getTime() - creationDate.getTime();

	const minutesDifference = Math.floor(timeDifference / (1000 * 60));
	const hoursDifference = Math.floor(minutesDifference / 60);
	const daysDifference = Math.floor(hoursDifference / 24);
	const monthsDifference = Math.floor(daysDifference / 30);
	const yearsDifference = Math.floor(daysDifference / 365);

	if (yearsDifference > 0) {
		return yearsDifference === 1 ? `${yearsDifference} rok temu` : `${yearsDifference} lat temu`;
	} else if (monthsDifference > 0) {
		return monthsDifference === 1
			? `${monthsDifference} miesiąc temu`
			: `${monthsDifference} miesiące temu`;
	} else if (daysDifference > 0) {
		return daysDifference === 1 ? `${daysDifference} dzień temu` : `${daysDifference} dni temu`;
	} else if (hoursDifference > 0) {
		return hoursDifference === 1
			? `${hoursDifference} godzinę temu`
			: `${hoursDifference} godziny temu`;
	} else if (minutesDifference > 0) {
		return minutesDifference === 1
			? `${minutesDifference} minutę temu`
			: `${minutesDifference} minuty temu`;
	} else {
		return 'Mniej niż 1 minutę temu';
	}
}


interface UserDetailsSectionProps {
	userData: UserData;
}

const UserDetailsSection: React.FC<UserDetailsSectionProps> = ({ userData }) => {
	const [isEditingProfile, setIsEditingProfile] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const isAdminOrSuperAdmin = false;

	const handleRoleSelect = async (index: number) => {
		setCurrentRoleIndex(index);
		setIsMenuOpen(false);
	};

	const userRolesData: string[] = [];

	const avatarSize = 'h-[120px] w-[120px] 3sm:h-32 3sm:w-32';

	const tab = 'ml-4';
	return (
		<div className="pb-[2vw] px-[4vw] md:pb-4 md:px-9 shadow-md border-2 rounded-3xl bg-white2black text-grey2white border-grey2white ">
			<Title
				title={'Szczegóły'}
				isAdminOrSuperAdmin={false}
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
