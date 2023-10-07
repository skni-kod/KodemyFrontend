import { BiSearch } from 'react-icons/bi';
import { PiMicrophoneThin } from 'react-icons/pi';

const SearchBarDesktop = () => {
	const IconClassNames = 'text-grey2white text-2xl h-[25.5px] w-[25.5px]';
	return (
		<div className="h-[50px] w-[auto] flex items-center border border-grey2white rounded-full mx-3 bg-white2darkgrey">
			<BiSearch className={`${IconClassNames} ml-[5px]`} />
			<input
				className="h-[47px] w-[20vw] text-[18px] outline-none bg-white2darkgrey text-black2white px-[5px]"
				type="text"
				placeholder="Szybkie wyszukiwanie"
			/>
			<PiMicrophoneThin
				className={`${IconClassNames} mr-[10px] cursor-pointer`}
			/>
		</div>
	);
};

export default SearchBarDesktop;
