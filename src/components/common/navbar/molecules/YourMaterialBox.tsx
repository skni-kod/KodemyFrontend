import Material from '../atoms/Material';

const YourMaterialBoxComponent = () => {
	return (
		<div className="flex flex-col w-full gap-3 pb-2 px-1">
			<Material
				status={'Odrzucony'}
				time={'8 godz.'}
				path={'Języki Programowania > Algorytm'}
			/>
			<Material
				status={'Oczekuje'}
				time={'2 godz.'}
				path={'Elektornika/Retro > Robotyka'}
			/>
		</div>
	);
};

export default YourMaterialBoxComponent;
