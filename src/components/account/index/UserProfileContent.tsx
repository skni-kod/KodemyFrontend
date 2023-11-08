import React, { useState, useEffect } from 'react';
import Avatar from '../../common/navbar/atoms/Avatar';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { calculateTimeDifference } from '@/utils/calculateTimeDifference';
import { transformRoleName } from '@/utils/transformRoleName';
import { fetchRoles } from '@/hooks/data/fetchRoles';
import { fetchUserById } from '@/hooks/data/fetchUserById';
import { sendNewRole } from '@/hooks/data/sendNewRole';
import AvatarImage from '@/assets/avatar.png';
import MaterialWrapper from '@/components/common/page/atoms/MaterialWrapper';
import clsx from 'clsx';
import RatingChart from '@/components/common/modal/materials/materialblock/molecules/rating/molecules/RatingChart';
import { Rating } from 'react-simple-star-rating';

const UserProfileContent = () => {
	const [userRolesData, setUserRolesData] = useState<string[]>([]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const userId = '1';
	const userData = fetchUserById(userId);

	useEffect(() => {
		const getRolesData = async () => {
			const rolesData = await fetchRoles();
			if (rolesData) {
				setUserRolesData(rolesData);
			}
		};
		getRolesData();
	}, []);

	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleRoleSelect = async (index: number) => {
		setCurrentRoleIndex(index);
		setIsMenuOpen(false);
		if (userData) {
			userData.role.name = userRolesData[index];
		}
		const roleIndex = index + 1;
		console.log('userRolesData[index] ', userRolesData[index]);
		console.log('userData', userData);
		if (userData) {
			await sendNewRole(userData.id, roleIndex);
		}
	};

	if (!userData) {
		return <div className="text-black2white">Loading...</div>;
	}

	const isAdminOrSuperAdmin =
		userData.role.name === 'ROLE_ADMIN' || userData.role.name === 'ROLE_SUPERADMIN';

	const avatarSize = 'h-[120px] w-[120px] 3sm:h-32 3sm:w-32';
	return (
		<div className="text-black2white">
			<div className="px-0 md:px-[1vw]">
				<h2 className="w-full mt-4 text-semibold text-[5vw] md:text-[36px]">Profil użytkownika:</h2>
			</div>
			<div className="flex justify-between items-center py-[2vw] px-[4vw] md:py-4 md:px-9 shadow-md border-2 rounded-3xl bg-white2black text-grey2white border-grey2white ">
				<div className="flex-none ${avatarSize} p-[1vw] md:p-1 flex justify-center items-center aspect-square">
					<img
						src={userData ? userData.photo : AvatarImage.src}
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
							Email: {userData.email || 'Brak adresu email'}
						</div>
						<h1 className="text-[2vw] md:text-sm py-[0.9vw] md:py-1 text-bold relative">
							Rola:{' '}
							{isAdminOrSuperAdmin && isEditing ? (
								<>
									<button onClick={handleMenuToggle} className="pr-1">
										{transformRoleName(userData.role.name)}{' '}
									</button>
									<span className="inline-block">
										{isMenuOpen ? <RxTriangleUp /> : <RxTriangleDown />}
									</span>
									{isMenuOpen && (
										<div className="absolute right-12 top-8 w-fit z-10 bg-white2verydarkgrey mt-2">
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
						</h1>
						<div className="text-[2vw] md:text-sm py-[0.9vw] md:py-1 text-bold">
							Utworzono: {calculateTimeDifference(userData.createdDate)}
						</div>
					</div>
				</div>
				<div className="text-[2vw] md:text-sm flex flex-col gap-4 items-end">
					<div className="flex justify-center items-center">
						<button className="bg-sky-500 hover:bg-blue-600 text-white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded flex">
							Przejdz do materiałów
						</button>
					</div>
					<div className="flex justify-center items-center">
						{isAdminOrSuperAdmin && (
							<button
								className="bg-sky-500 hover:bg-blue-600 text-white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded flex"
								onClick={() => setIsEditing(!isEditing)}
							>
								{isEditing ? 'Anuluj' : 'Edytuj'}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserProfileContent;
