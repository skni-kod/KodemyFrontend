import React, { useState } from 'react';
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx';
import AvatarImage from '@/assets/avatar.png';
import UserCardTitle from '@/components/users/by_id_page/page_content/UserCardTitle';
import { User } from '@/services/user/types';
import { calculateTimeDifference, transformRoleName } from '@/utils/methods';
import UserCardBody from '@/components/users/by_id_page/page_content/UserCardBody';
import UserCard from '@/components/users/by_id_page/page_content/UserCard';
import { TEXT } from '@/utils/constant';
import Image from 'next/image';

interface UserDetailsSectionProps {
	user: User;
}

const UserDetailsSection: React.FC<UserDetailsSectionProps> = ({ user }) => {
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
		<UserCard>
			<UserCardTitle
				title={TEXT.USER.USER_DETAILS}
				isAdminOrSuperAdmin={false}
				isEditing={isEditingProfile}
				setIsEditing={setIsEditingProfile}
			/>
			<UserCardBody>
				<div className={`flex-none ${avatarSize} flex aspect-square items-center justify-center p-[1vw] md:p-1`}>
					<Image
						src={user && user.photo ? user.photo : AvatarImage.src}
						alt={TEXT.USER.AVATAR}
						className={`flex items-center justify-center rounded-full ${avatarSize}`}
					/>
				</div>
				<div className="flex grow items-center justify-between px-[3vw] md:px-5">
					<div>
						<div className="text-black2white text-bold text-ellipsis py-[1vw] text-[2.82vw] md:py-1 md:text-xl">
							{user.username}
						</div>
						<div className="text-bold py-[0.9vw] text-[2vw] md:py-1 md:text-sm">
							{TEXT.USER.EMAIL}: <div className={tab}>{user.email || 'Brak adresu email'}</div>
						</div>
						<h1 className="text-bold relative py-[0.9vw] text-[2vw] md:py-1 md:text-sm">
							{TEXT.USER.ROLE}:
							<div className={tab}>
								{isAdminOrSuperAdmin && isEditingProfile ? (
									<>
										<button onClick={handleMenuToggle} className="pr-1">
											{transformRoleName(user.role.name)}
										</button>
										<span className="inline-block">{isMenuOpen ? <RxTriangleUp /> : <RxTriangleDown />}</span>
										{isMenuOpen && (
											<div className="bg-white2verydarkgrey absolute right-7 top-10 z-10 mt-2 w-fit">
												<ul className="m-0 max-h-none w-max cursor-pointer list-none overflow-auto rounded-lg border-2 p-0">
													{userRolesData.map((role, index) => (
														<li key={index}>
															<button
																className="2sm:py-[0.5vw] h-auto w-full cursor-pointer border-none bg-transparent px-2 text-left transition duration-300 hover:text-sky-500"
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
									<span>{transformRoleName(user.role.name)}</span>
								)}
							</div>
						</h1>
						<div className="text-bold py-[0.9vw] text-[2vw] md:py-1 md:text-sm">
							{TEXT.USER.CREATED}:<div className={tab}>{calculateTimeDifference(user.createdDate)}</div>
						</div>
					</div>
				</div>
			</UserCardBody>
		</UserCard>
	);
};

export default UserDetailsSection;
