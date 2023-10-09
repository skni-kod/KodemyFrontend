import Notification from '../atoms/Notification';

const AllMaterialBoxComponent = () => {
	return (
		<div className="flex flex-col w-full gap-2 pb-2 px-1 max-h-52" style={{ overflowY: 'auto' }}>
			<Notification status={'Oczekuje'} time={'2 godz.'} path={'GameDev > Unity'} />
			<Notification status={'Przyjęty'} time={'3 godz.'} path={'Aplikacje webowe > Frontend Dev'} />
			<Notification status={'Odrzucony'} time={'5 godz.'} path={'Aplikacje webowe > Backend Dev'} />
			<Notification
				status={'Odrzucony'}
				time={'10 godz.'}
				path={'Języki programowania > Struktura danych'}
			/>
		</div>
	);
};

export default AllMaterialBoxComponent;
