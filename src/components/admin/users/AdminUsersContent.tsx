import { useEffect, useState } from 'react';
import AvatarImage from '@/assets/avatar.png';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import Route from '@/utils/route';

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
export const pageAccountIdRoute = (userid: number): Route => {
	const route = {
		pathname: `/account/${userid}`,
	};

	window.location.href = route.pathname;

	return route;
};

const AdminUsersContent = () => {
	const [userData, setUserData] = useState<UserData | null>(null);
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
	const calculateTimeDifference = (createdDate: string) => {
		const currentDate = new Date();
		const creationDate = new Date(createdDate);
		const timeDifference = currentDate.getTime() - creationDate.getTime();

		const minutesDifference = Math.floor(timeDifference / (1000 * 60));
		const hoursDifference = Math.floor(minutesDifference / 60);
		const daysDifference = Math.floor(hoursDifference / 24);
		const yearsDifference = Math.floor(daysDifference / 365); // Calculate years difference

		if (yearsDifference > 0) {
			return `${yearsDifference} lat temu`;
		} else if (daysDifference > 0) {
			return `${daysDifference} dni temu`;
		} else if (hoursDifference > 0) {
			return `${hoursDifference} godzin temu`;
		} else if (minutesDifference > 0) {
			return `${minutesDifference} minut temu`;
		} else {
			return 'Mniej niż 1 minutę temu';
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
	}, []);

	if (!userData) {
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
					<div className={content}>{calculateTimeDifference(userData.createdDate)}</div>
				</div>
				<div className={column}>
					<h1>Rola</h1>
					<div className="{content} relative flex items-center">
						{transformRoleName(userData.role.name)}
					</div>
				</div>
				<div className={column}>
					<h1>Ilość Materiałów:</h1>
					<div className={content}>0</div>
				</div>
				<div className={column}>
					<h1>Przejdz do profilu</h1>

					<div className={content}>
						<button
							className="bg-sky-500 hover:bg-blue-600 text-white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded flex"
							onClick={() => pageAccountIdRoute(parseInt(userData.id, 10))}
						>
							Przejdź do profilu
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
export default AdminUsersContent;
