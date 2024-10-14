import React from 'react';

type UserCardTitleProps = {
	title: string;
	isAdminOrSuperAdmin: boolean;
	isEditing: boolean;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const UserCardTitle: React.FC<UserCardTitleProps> = ({ title, isAdminOrSuperAdmin, isEditing, setIsEditing }) => {
	return (
		<div className="flex items-center justify-between px-0 md:px-[1vw]">
			<h2 className="text-semibold mt-4 w-full pb-4 text-[5vw] md:text-[30px]">{title}</h2>
			{isAdminOrSuperAdmin && (
				<button
					className="2sm:py-2 2sm:px-4 flex rounded bg-sky-500 px-2 py-1 text-xs text-white hover:bg-blue-600 lg:text-sm"
					onClick={() => setIsEditing(!isEditing)}
				>
					{isEditing ? 'Anuluj' : 'Edytuj'}
				</button>
			)}
		</div>
	);
};

export default UserCardTitle;
