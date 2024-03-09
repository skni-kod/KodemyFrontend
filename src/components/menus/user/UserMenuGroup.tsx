import clsx from 'clsx';

type UserMenuGroupProps = {
	label?: string;
	className?: string;
	children: React.ReactNode;
	hidden?: boolean;
};

export default function UserMenuGroup({ label, children, hidden = false }: UserMenuGroupProps) {
	return (
		<>
			<div className={clsx('flex flex-col w-full uppercase', !hidden && 'pt-1.5')}>
				{label && <span className="px-0.5 text-xs text-gray-500 text-center">{label}</span>}
				{!hidden && <div className="w-full pb-1 border-t border-grey2white" />}
			</div>
			<div className="flex flex-col gap-1">{children}</div>
		</>
	);
}
