import Material from '../atoms/Material';

const YourMaterialBoxComponent = () => {
	return (
		<div
			className="flex flex-col w-full gap-3 pb-2 px-1 max-h-[177px]"
			style={{ overflowY: 'auto' }}
		>
			<Material
				status={'Odrzucony'}
				time={'2 godz.'}
				path={'Języki Programowania > Algorytm'}
			/>
			<Material
				status={'Oczekuje'}
				time={'8 godz.'}
				path={'Elektornika/Retro > Robotyka'}
			/>
			<Material
				status={'Przyjęty'}
				time={'10 godz.'}
				path={'Aplikacje webowe > Mobile Dev'}
			/>
		</div>
	);
};

export default YourMaterialBoxComponent;
