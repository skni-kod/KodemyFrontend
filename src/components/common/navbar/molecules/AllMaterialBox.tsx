import Material from '../atoms/Material';

const AllMaterialBoxComponent = () => {
	return (
		<div
			className="flex flex-col w-full gap-3 pb-2 px-1 max-h-[177px]"
			style={{ overflowY: 'auto' }}
		>
			<Material status={'Oczekuje'} time={'2 godz.'} path={'GameDev > Unity'} />
			<Material
				status={'Przyjęty'}
				time={'3 godz.'}
				path={'Aplikacje webowe > Frontend Dev'}
			/>
			<Material
				status={'Odrzucony'}
				time={'5 godz.'}
				path={'Aplikacje webowe > Backend Dev'}
			/>
			<Material
				status={'Odrzucony'}
				time={'10 godz.'}
				path={'Języki programowania > Struktura danych'}
			/>
		</div>
	);
};

export default AllMaterialBoxComponent;
