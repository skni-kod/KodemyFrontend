export default function Button({
	children,
	onClick,
	disabled = false,
}: {
	children: React.ReactNode;
	onClick: () => void;
	disabled?: boolean;
}) {
	return (
		<button
			className="flex items-center bg-primary text-text2primary font-semibold px-3 py-2 rounded"
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
