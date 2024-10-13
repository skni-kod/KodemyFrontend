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
			className="hover:bg-primaryHover flex items-center rounded bg-primary px-3 py-1 font-normal text-textOnPrimary"
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
}
