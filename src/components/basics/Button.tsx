export default function Button({ value, onClick }: { value: string; onClick: () => void }) {
	return (
		<button
			className="bg-primary text-text2primary font-semibold px-3 py-2 rounded"
			onClick={onClick}
		>
			{value}
		</button>
	);
}
