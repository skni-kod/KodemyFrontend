const BottomButtons = ({
	handleState,
	buttonText,
}: {
	handleState: () => void;
	buttonText: string;
}) => {
	return (
		<button
			className="bg-sky-500 hover:bg-blue-600 text-white2white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded"
			onClick={() => handleState()}
		>
			{buttonText}
		</button>
	);
};

export default BottomButtons;
