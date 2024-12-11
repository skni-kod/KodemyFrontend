const ResultCount = ({ value }: { value: number | undefined }) => {
	return (
		<div>
			Znalezione elementy: <span className="text-sky-500">{value ? value : 0}</span>
		</div>
	);
};

export default ResultCount;
