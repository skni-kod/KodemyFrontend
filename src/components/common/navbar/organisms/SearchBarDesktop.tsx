import { BiSearch } from 'react-icons/bi';
import { PiMicrophoneThin } from 'react-icons/pi';

const SearchBarDesktop = () => {
	const IconClassNames = 'text-grey2white text-2xl h-[5vw] w-[5vw] sm:h-[25.5px] sm:w-[25.5px]';
	return (
		<div className="h-auto sm:h-[42px] w-auto flex items-center border border-grey2white rounded-full mx-3 bg-white2darkgrey px-[5px]">
			<BiSearch className={`${IconClassNames} mr-[5px]`} />
			<input
				className="h-auto py-[1vh] w-[33vw] sm:h-[37px] sm:w-[20vw] text-[2.8vw] sm:text-[18px] sm:min-w-[205px] outline-none bg-white2darkgrey text-black2white px-[5px]"
				type="text"
				placeholder="Szybkie wyszukiwanie"
			/>
			<PiMicrophoneThin className={`${IconClassNames} mr-[5px] cursor-pointer`} />
		</div>
	);
};

export default SearchBarDesktop;
