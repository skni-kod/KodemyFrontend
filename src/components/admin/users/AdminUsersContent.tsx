import { useEffect, useState } from 'react';
import AvatarImage from '@/assets/avatar.png';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import { BrowserRouter, Link } from 'react-router-dom';

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

const AdminUsersContent = () => {
	const [userData, setUserData] = useState<UserData | null>(null);
	const [userRolesData, setUserRolesData] = useState<string[]>([]);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const transformRoleName = (role: string) => {
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
	};

	useEffect(() => {
		const userId = [1];
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:8081/api/users/${userId}`, {
					credentials: 'include',
				});
				if (response.status === 200) {
					const data = await response.json();
					setUserData(data);
				} else {
					console.error('Wystąpił błąd podczas pobierania danych');
				}
			} catch (error) {
				console.error('Wystąpił błąd podczas pobierania danych:', error);
			}
		};
		fetchData();

		const fetchRoles = async () => {
			try {
				const response = await fetch(`http://localhost:8081/api/roles`, {
					credentials: 'include',
				});
				if (response.status === 200) {
					const dataroles = await response.json();
					setUserRolesData(dataroles);
				} else {
					console.error('Wystąpił błąd podczas pobierania danych');
				}
			} catch (error) {
				console.error('Wystąpił błąd podczas pobierania danych:', error);
			}
		};

		fetchRoles();
	}, []);

	const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const sendUserRoleToDatabase = async (userId: string, newRole: number) => {
		try {
			const response = await fetch(`http://localhost:8081/api/users/${userId}/roles`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ newRole }),
				credentials: 'include',
			});
			console.log('response.status ', response.status);
			if (response.status === 200) {
				console.log('New role sent to the database successfully.');
			} else {
				console.error('Failed to send the new role to the database.');
			}
		} catch (error) {
			console.error('An error occurred while sending the new role:', error);
		}
	};

	const handleRoleSelect = (index: number) => {
		setCurrentRoleIndex(index);
		setIsMenuOpen(false);
		setUserData((prevUserData) => ({
			...prevUserData!,
			role: {
				name: userRolesData[index],
			},
		}));
		const roleIndex = index + 1;
		console.log('userRolesData[index] ', userRolesData[index]);
		if (userData) {
			sendUserRoleToDatabase(userData.id, roleIndex);
		}
	};

	if (!userData || !userRolesData) {
		return <div className="pl-0 md:pl-20 2xl:pl-0 text-black2white">Loading...</div>;
	}

	const column = 'flex flex-col p-[1vw] gap-[1.5vw] md:gap-3 text-[2vw] md:text-sm';
	const content = 'flex items-center';
	const avatarSize = 'h-[5vw] w-[5vw] 3sm:h-7 3sm:w-7';
	return (
		<div className="w-full px-4 md:pl-20 2xl:pl-0 text-black2white ">
			<div className="px-0 md:px-[1vw]">
				<h2 className="w-full mt-4 text-semibold text-[5vw] md:text-[36px]">Użytkownicy</h2>
			</div>
			<div className="flex text-black2white text-xs">
				<div className={column}>
					<h1>Logo</h1>
					<img
						src={userData ? userData.photo : AvatarImage.src}
						alt="Avatar użytkownika"
						className={`rounded-full ${avatarSize}`}
					/>
				</div>
				<div className={column}>
					<h1>Nazwa</h1>
					<div className={content}>{userData.username}</div>
				</div>
				<div className={column}>
					<h1>Data utworzenia</h1>
					<div className={content}>{userData.createdDate.replace('T', ' ')}</div>
				</div>
				<div className={column}>
					<h1>Rola</h1>
					<div className="{content} relative flex items-center">
						<button onClick={handleMenuToggle} className="pr-1">
							{transformRoleName(userData.role.name)}
						</button>
						{isMenuOpen ? <RxTriangleUp /> : <RxTriangleDown />}
						{isMenuOpen && (
							<div className="absolute right-2 top-full w-fit z-10 bg-white2verydarkgrey mt-2">
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
					</div>
				</div>
				<div className={column}>
					<h1>Ilość Materiałów:</h1>
					<div className={content}>0</div>
				</div>
				<div className={column}>
					<h1>Przejdz do profilu</h1>

					<div className={content}>
						<BrowserRouter basename="/account">
							<button className="bg-sky-500 hover:bg-blue-600 text-white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded flex">
								Przejdź do profilu
							</button>
						</BrowserRouter>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AdminUsersContent;
