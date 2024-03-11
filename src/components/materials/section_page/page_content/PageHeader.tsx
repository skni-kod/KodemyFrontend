export default function PageHeader({ title }: { title?: string }) {
	if (!title) return null;
	return <h2 className="w-full text-4xl text-semibold">{title}</h2>;
}
