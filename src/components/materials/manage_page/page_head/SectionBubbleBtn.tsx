import React from 'react';

type SectionBubbleBtnProps = {
	name: string;
	onClick: () => void;
};

export default function SectionBubbleBtn({ name, onClick }: SectionBubbleBtnProps) {
	return (
		<div className="relative h-inherit" onClick={onClick}>
			<div className="shrink-0 cursor-pointer rounded-3xl border-2 bg-bg p-3 text-secondary shadow-md hover:bg-bgHover">
				{name}
			</div>
		</div>
	);
}
