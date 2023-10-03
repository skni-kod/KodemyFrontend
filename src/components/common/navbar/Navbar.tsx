import { TfiMenu } from 'react-icons/tfi';
import Logo from '@/components/common/navbar/atoms/Logo';
import SearchBar from '@/components/common/navbar/organisms/SearchBar';
import UserBar from '@/components/common/navbar/organisms/UserBar';

const Navbar = () => {
	return (
		<nav className="relative top-0 w-full left-0 bg-white flex items-center justify-between px-7 py-3.5 z-10 shadow-md">
			<div className="flex items-center gap-x-[10px] text-2xl font-semibold text-blue-500">
				<TfiMenu className="hidden" />
				<Logo width={155} height={100} />
			</div>
			<SearchBar />
			<UserBar />
		</nav>
	);
};

export default Navbar;
