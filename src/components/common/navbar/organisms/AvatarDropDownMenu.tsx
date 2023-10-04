const AvatarDropDownMenu = () => {
	return (
		<div className="bg-white h-[auto] w-[160px] absolute top-[70px] right-[0px] shadow-md rounded-lg p-2">
			<div className="text-[#666] text-[12px] p-1">
				<a>
					<button>Ustawienia konta</button>
				</a>
				<div className="pt-1">Twoje materiały:</div>
				<button className="pl-3 pt-1">Zatwierdzone</button>
				<button className="pl-3 pt-1">Nie zatwierdzone</button>
				<button className="pl-3 pt-1">Ulubione</button>
			</div>
			<div className="text-black font-semibold text-[12px] p-1">
				<button>Wyloguj się</button>
			</div>
		</div>
	);
};

export default AvatarDropDownMenu;
