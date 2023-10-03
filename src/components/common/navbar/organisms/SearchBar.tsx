import { BiSearch } from 'react-icons/bi';
import { PiMicrophoneThin } from 'react-icons/pi';

const SearchBar = () => {
	const IconClassNames = 'text-gray-400 text-2xl h-[25.5px] w-[25.5px]';
	return (
		<div className="h-[50px] w-[auto] flex items-center border border-gray-300 rounded-full mx-3">
			<BiSearch className={`${IconClassNames} ml-[5px]`} />
			<input
				className="h-[47px] w-[450px] text-[18px] outline-none text-[#666] px-[5px]"
				type="text"
				placeholder="Szybkie wyszukiwanie"
			/>
			<PiMicrophoneThin
				className={`${IconClassNames} mr-[10px] cursor-pointer`}
			/>
		</div>
	);
};

export default SearchBar;
