import NotificationComponent from '../atoms/NotificationComponent';

const BellDropDownMenu = () => {
	return (
		<div className="bg-gray-200 h-[auto] w-[323px] absolute top-[70px] right-[0px] shadow-md rounded-lg">
			<div className=" h-[auto] flex justify-between m-2 relative">
				<h1 className="w-4/10 text-black text-[20px] p-1">Powiadomienia</h1>
				<h1 className="w-4/10 text-black text-[10px] p-1 absolute bottom-[4px] right-[10px] underline">
					Odznacz powiadomienia
				</h1>
			</div>
			<div className=" h-[180px] w-[323px]">
				<div className=" h-[auto] flex m-2 relative underline border-b">
					<NotificationComponent text={'Wszystkie'} className={'pl-4'} />
					<NotificationComponent text={'Twoje materiały'} className={'pl-4'} />
				</div>
			</div>
		</div>
	);
};

export default BellDropDownMenu;
