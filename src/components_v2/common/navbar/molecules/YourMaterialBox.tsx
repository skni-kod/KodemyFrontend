import Notification from '../atoms/Notification';

const YourMaterialBoxComponent = () => {
	return (
		<div className="flex flex-col w-full gap-2 pb-2 px-1 max-h-52" style={{ overflowY: 'auto' }}>
			<Notification
				status={'Odrzucony'}
				time={'2 godz.'}
				path={'Języki Programowania > Algorytm'}
			/>
			<Notification status={'Oczekuje'} time={'8 godz.'} path={'Elektornika/Retro > Robotyka'} />
			<Notification status={'Przyjęty'} time={'10 godz.'} path={'Aplikacje webowe > Mobile Dev'} />
		</div>
	);
};

export default YourMaterialBoxComponent;
