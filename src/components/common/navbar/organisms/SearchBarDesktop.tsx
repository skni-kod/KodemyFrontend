import { BiSearch } from 'react-icons/bi';
import { PiMicrophoneThin } from 'react-icons/pi';

const SearchBarDesktop = () => {
	const IconClassNames = 'text-icon text-2xl h-[25.5px] w-[25.5px]';
	return (
		<div className="h-[50px] w-[auto] flex items-center border border-icon rounded-full mx-3 bg-body">
			<BiSearch className={`${IconClassNames} ml-[5px]`} />
			<input
				className="h-[47px] w-[30vw] text-[18px] outline-none bg-body text-icon px-[5px]"
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
