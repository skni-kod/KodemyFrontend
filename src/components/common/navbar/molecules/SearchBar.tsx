const SearchBar = () => {
	return (
		<div className="h-[47px] max-w-[430px] w-full">
			<input
				className="h-[47px] w-full text-[18px] outline-none bg-white text-[#666] px-[20px]"
				type="text"
				placeholder="Szybkie wyszukiwanie"
			/>
		</div>
	);
};

export default SearchBar;
