import { BiSearch } from 'react-icons/bi';

const SearchBarDesktop = () => {
	return (
		<div className="h-auto sm:h-[42px] w-auto hidden sm:block border border-grey2white mx-3 bg-white2darkgrey px-1 rounded-full">
			<div className="flex items-center px-1 gap-1 overflow-hidden rounded-full">
				<BiSearch className="text-grey2white text-2xl h-[5vw] w-[5vw] sm:h-[25.5px] sm:w-[25.5px] mt-0.5" />
				<input
					className="h-auto py-[1vh] w-[33vw] sm:h-[37px] sm:w-[20vw] sm:min-w-[205px] text-lg outline-none bg-white2darkgrey text-grey2white"
					placeholder="Szybkie wyszukiwanie"
				/>
			</div>
		</div>
	);
};

export default SearchBarDesktop;
