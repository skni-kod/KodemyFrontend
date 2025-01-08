export default function SectionBox({ children, title }: { children: React.ReactNode; title: string }) {
	return (
		<div className="w-full px-4 pb-5">
			<h3 className="text-2xl font-bold">{title}</h3>
			{children}
		</div>
	);
}
