import React from 'react';
import { fetchUserById } from '@/hooks/data/fetchUserById';
import UserDetailsSection from './molecules/UserDetailsSection';
import UserSessionSection from './molecules/UserSessionSection';

const UserProfileContent = ({ id }: { id: number }) => {
	const userData = fetchUserById(id.toString());

	if (!userData) {
		return <div className="text-black2white md:pl-28 xl:pl-20 2xl:pl-6">Loading...</div>;
	}
	return (
		<div className="text-black2white">
			<div className="px-0 md:px-[1vw]">
				<h2 className="w-full mt-4 text-semibold text-[5vw] md:text-[36px] pb-4">Profil</h2>
			</div>
			<div className="space-y-12">
				<UserDetailsSection userData={userData} />
				<UserSessionSection userData={userData} />
			</div>
		</div>
	);
};

export default UserProfileContent;
