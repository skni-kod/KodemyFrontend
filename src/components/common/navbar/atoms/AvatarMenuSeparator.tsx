type AvatarMenuSeparatorProps = {
	value: string;
	className?: string;
	children?: React.ReactNode;
};

const AvatarMenuSeparator = ({ value, className, children }: AvatarMenuSeparatorProps) => {
	return (
		<div className={className}>
			<div className="flex flex-col w-full uppercase">
				<span className="px-0.5 text-xs text-grey2white text-center">{value}</span>
				<div className="w-full pb-2 border-t border-grey2white" />
			</div>
			{children}
		</div>
	);
};

export default AvatarMenuSeparator;
