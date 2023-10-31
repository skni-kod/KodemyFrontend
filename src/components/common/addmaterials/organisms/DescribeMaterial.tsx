import Title from '../../modal/atoms/Title';

const DescribeMaterial = ({
	titletext,
	descriptiontext,
	titlematerial,
	linkmaterial,
	descriptionmaterial,
	handleMaterialChange,
}: {
	titletext: string;
	descriptiontext: string;
	titlematerial: string;
	linkmaterial: string;
	descriptionmaterial: string;
	handleMaterialChange: (
		titlematerial: string,
		linkmaterial: string,
		descriptionmaterial: string,
	) => void;
}) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		handleMaterialChange(
			name === 'title' ? value : titlematerial,
			name === 'link' ? value : linkmaterial,
			name === 'description' ? value : descriptionmaterial,
		);
	};
	return (
		<div>
			<Title titletext={titletext} descriptiontext={descriptiontext} />
			<div className="flex flex-col">
				<h2 className="text-black2white">Tytuł:</h2>
				<div className="flex text-black2white px-1 py-1 border border-black2white rounded-lg bg-transparent">
					<input
						name="title"
						className="pl-2 bg-transparent w-full"
						type="text"
						placeholder="Tytuł"
						defaultValue={titlematerial}
						onChange={handleInputChange}
					/>
				</div>
				<h2 className="text-black2white">Link:</h2>
				<div className="flex text-black2white px-1 py-1 border border-black2white rounded-lg bg-transparent">
					<input
						name="link"
						className="pl-2 bg-transparent w-full"
						type="text"
						placeholder="Link"
						defaultValue={linkmaterial}
						onChange={handleInputChange}
					/>
				</div>
				<h2 className="text-black2white">Opis:</h2>
				<div className="flex text-black2white px-1 py-1 border border-black2white rounded-lg bg-transparent">
					<textarea
						name="description"
						className="pl-2 bg-transparent w-full"
						placeholder="Opis"
						defaultValue={descriptionmaterial}
						onChange={handleInputChange}
					/>
				</div>
			</div>
		</div>
	);
};

export default DescribeMaterial;
