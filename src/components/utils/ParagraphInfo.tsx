import React from 'react';

export default function ParagraphInfo({
	label,
	className,
	children,
}: {
	label: string;
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<div className={`w-full ${className}`}>
			<h2 className="text-lg font-semibold">{label}</h2>
			<div className="pt-2">{children}</div>
		</div>
	);
}
