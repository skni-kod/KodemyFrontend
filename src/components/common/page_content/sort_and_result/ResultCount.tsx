const ResultCount = ({ value }: { value: number | undefined }) => {
	return (
		<div>
			Znaleziono <span className="text-sky-500">{value ? value : 0}</span> elementów
		</div>
	);
};

export default ResultCount;
