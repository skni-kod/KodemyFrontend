import Title from '../atoms/Title';

const DescribeMaterial = ({
	titletext,
	descriptiontext,
}: {
	titletext: string;
	descriptiontext: string;
}) => {
	return (
		<div>
			<Title titletext={titletext} descriptiontext={descriptiontext} />
			<div className="border border-black2white rounded-lg mx-6">
				<div className="px-5 py-5 text-black2white text-center">
					<h2 className="text-lg font-semibold ">Języki programowania</h2>
					<span className="pt-6 text-sm">Lorem ipsum itd...</span>
				</div>
			</div>
		</div>
	);
};

export default DescribeMaterial;
