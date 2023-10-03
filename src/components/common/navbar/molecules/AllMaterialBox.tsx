import Material from '../atoms/Material';

const AllMaterialBoxComponent = () => {
	return (
		<div className="flex flex-col w-full gap-4 py-4 px-1">
			<Material status={'Przyjęty'} time={'2 godz.'} path={'GameDev > Unity'} />
			<Material
				status={'Odrzucony'}
				time={'5 godz.'}
				path={'Aplikacje webowe > Frontend Dev'}
			/>
		</div>
	);
};

export default AllMaterialBoxComponent;
