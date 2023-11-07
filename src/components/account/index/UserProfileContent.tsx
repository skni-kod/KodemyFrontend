import React, { useState, useEffect } from 'react';
import Avatar from '../../common/navbar/atoms/Avatar';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { calculateTimeDifference } from '@/utils/calculateTimeDifference';
import { transformRoleName } from '@/utils/transformRoleName';
import { fetchRoles } from '@/hooks/data/FetchRoles';
import { fetchUserById } from '@/hooks/data/FetchUserById';
import { sendNewRole } from '@/hooks/data/sendNewRole';

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

	return (
		<div className="text-black2white">
			<div className="px-0 md:px-[1vw]">
				<h2 className="w-full mt-4 text-semibold text-[5vw] md:text-[36px]">Profil użytkownika:</h2>
			</div>
			<div className="grid grid-cols-2 gap-2 w-auto pt-2">
				<p className="text-right">Nazwa użytkownika:</p>
				<p>{userData.username}</p>

				<p className="text-right">Email:</p>
				<p>{userData.email || 'Brak adresu email'}</p>

				<p className="text-right">Logo:</p>
				<div className="flex items-center mr-2">
					<Avatar />
				</div>

				<p className="text-right">Data utworzenia:</p>
				<p>{calculateTimeDifference(userData.createdDate)}</p>

				<p className="text-right">Rola:</p>
				<div className="{content} relative flex items-center">
					{isAdminOrSuperAdmin && isEditing ? (
						<>
							<button onClick={handleMenuToggle} className="pr-1">
								{transformRoleName(userData.role.name)}
							</button>
							{isMenuOpen ? <RxTriangleUp /> : <RxTriangleDown />}
							{isMenuOpen && (
								<div className="absolute right-12 top-0 w-fit z-10 bg-white2verydarkgrey mt-2">
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

				<p className="text-right">Liczba wysłanych materiałów:</p>
				<p>0</p>

				{isAdminOrSuperAdmin && (
					<>
						<p className="text-right">Edycja profilu użytkownika:</p>
						<p>
							<button
								className="bg-sky-500 hover:bg-blue-600 text-white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded flex"
								onClick={() => setIsEditing(!isEditing)}
							>
								{isEditing ? 'Anuluj' : 'Edytuj'}
							</button>
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default UserProfileContent;
