import React from 'react';

type TitleProps = {
	title: string;
	isAdminOrSuperAdmin: boolean;
	isEditing: boolean;
	setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const Title: React.FC<TitleProps> = ({ title, isAdminOrSuperAdmin, isEditing, setIsEditing }) => {
	return (
		<div className="px-0 md:px-[1vw] flex justify-between items-center">
			<h2 className="w-full mt-4 text-semibold text-[5vw] md:text-[30px] pb-4">{title}</h2>
			{isAdminOrSuperAdmin && (
				<button
					className="bg-sky-500 hover:bg-blue-600 text-white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded flex"
					onClick={() => setIsEditing(!isEditing)}
				>
					{isEditing ? 'Anuluj' : 'Edytuj'}
				</button>
			)}
		</div>
	);
};

export default Title;
