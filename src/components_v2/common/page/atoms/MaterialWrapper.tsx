import React, { useState } from 'react';
import clsx from 'clsx';

const MaterialWrapper = ({
	children,
	onClick,
}: {
	children: React.ReactNode;
	onClick: () => void;
}) => {
	const [isHover, setIsHover] = useState(false);

	return (
		<div
			className={clsx(
				'flex justify-between items-center py-[2vw] px-[4vw] md:py-4 md:px-9 shadow-md border-2 rounded-3xl shrink-0 bg-white2black text-grey2white cursor-pointer border-grey2white hover:border-sky-500',
			)}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default MaterialWrapper;
