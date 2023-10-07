import UserBarPhone from './UserBarPhone';

const PhoneDropDownMenu = () => {
	return (
		<div className=" px-[8vw] bg-white2darkgrey h-[auto] w-[100%] absolute top-[63px] right-[0px] shadow-md">
			<h1 className=" text-black2white">Miejsce 1</h1>
			<h1 className=" text-black2white">Miejsce 2</h1>
			<h1 className=" text-black2white">Miejsce 3</h1>
			<h1 className=" text-black2white">Miejsce 4</h1>
			<h1 className=" text-black2white">Miejsce 5</h1>

			<UserBarPhone />
		</div>
	);
};

export default PhoneDropDownMenu;
