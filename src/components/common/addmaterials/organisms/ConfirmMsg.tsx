import Title from '../atoms/Title';

const ConfirmMsg = ({
	titletext,
	descriptiontext,
	sectionID,
	categoryID,
	titlematerial,
	linkmaterial,
	descriptionmaterial,
}: {
	titletext: string;
	descriptiontext: string;
	sectionID: string;
	categoryID: string;
	titlematerial: string;
	linkmaterial: string;
	descriptionmaterial: string;
}) => {
	return (
		<>
			<Title titletext={titletext} descriptiontext={descriptiontext} />
			<div className="flex flex-col">
				<h2 className="text-black2white">sectionID: {sectionID}</h2>
				<h2 className="text-black2white">categoryID: {categoryID}</h2>
				<h2 className="text-black2white">titlematerial: {titlematerial}</h2>
				<h2 className="text-black2white">linkmaterial: {linkmaterial}</h2>
				<h2 className="text-black2white">descriptionmaterial: {descriptionmaterial}</h2>
			</div>
		</>
	);
};

export default ConfirmMsg;
