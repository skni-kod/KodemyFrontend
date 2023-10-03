const BellDropDownMenu = () => {
	return (
		<div className="bg-gray-200 h-[auto] w-[323px] absolute top-[70px] right-[0px]">
			<div className=" h-[auto] flex justify-between m-2">
				<h1 className="w-4/10 text-black text-[20px] p-1">Powiadomienia</h1>
				<h1 className="w-4/10 text-black text-[10px] p-1">
					Odznacz powiadomienia
				</h1>
			</div>
			<div className="bg-yellow-200 h-[180px] w-[323px]"></div>
		</div>
	);
};

export default BellDropDownMenu;
