import Avatar from '@/components/common/navbar/assets/Avatar';
import Bell from '@/components/common/navbar/assets/Bell';

const UserBar = () => {
	return (
		<div className="relative">
			<div className="flex flex-row items-center gap-4">
				<button className="bg-base hover:bg-blue-700 text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded">
					Dodaj materiał
				</button>
				<Bell isActive={false} value={0} />
				<Avatar />
			</div>
		</div>
	);
};

export default UserBar;
