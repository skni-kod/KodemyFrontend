const Title = ({ titletext, descriptiontext }: { titletext: string; descriptiontext: string }) => {
	return (
		<div className="text-black2white text-center pb-2">
			<h2 className="text-4xl font-semibold">{titletext}</h2>
			<span className="pt-6">{descriptiontext}</span>
		</div>
	);
};

export default Title;
