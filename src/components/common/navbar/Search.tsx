const SearchBar = () => {
	return (
		<div className="max-w-md mx-auto">
			<div className="relative flex items-center w-full h-12 rounded-lg overflow-hidden">
				<div className="grid place-items-center h-full w-12 text-gray-300">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="gray">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
					</svg>
				</div>
				<input
					className="bg-body h-full w-full outline-none text-sm text-gray-700 pr-2 peer"
					type="text"
					id="search"
					placeholder="Szybkie wyszukiwanie"
				/>
			</div>
		</div>
	);
};

export default SearchBar;