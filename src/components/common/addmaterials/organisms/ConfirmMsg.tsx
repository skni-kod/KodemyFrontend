import Title from '../atoms/Title';

const ConfirmMsg = ({
	titletext,
	descriptiontext,
}: {
	titletext: string;
	descriptiontext: string;
}) => {
	return (
		<>
			<Title titletext={titletext} descriptiontext={descriptiontext} />
		</>
	);
};

export default ConfirmMsg;
