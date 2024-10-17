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
			className="flex items-center rounded bg-primary px-3 py-1 font-normal text-textOnPrimary hover:bg-primaryHover"
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
