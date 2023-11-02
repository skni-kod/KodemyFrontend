const CloseButton = ({ handleCloseButton }: { handleCloseButton: () => void }) => {
	return (
		<div className="relative bottom-0 left-0 flex justify-center w-full pb-3 pt-11">
			<button
				className="bg-sky-500 hover:bg-blue-600 text-white2white text-xs lg:text-sm 2sm:py-2 py-1 px-2 2sm:px-4 rounded"
				onClick={() => handleCloseButton()}
			>
				Zamknij
			</button>
		</div>
	);
};

export default CloseButton;
