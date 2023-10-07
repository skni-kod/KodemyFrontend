import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

const ProgressBar = ({
	position,
	isLoading,
}: {
	position: string;
	isLoading: boolean;
}) => (
	<div className="relative flex-1 h-1 bg-gray-400">
		<div
			className={clsx(
				'absolute top-0 h-full bg-gray-500 transition-[width] duration-1000',
				position,
				isLoading ? 'w-full' : 'w-0',
			)}
		/>
	</div>
);

const HomeButton = () => {
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div
			className="flex flex-nowrap items-center gap-x-4 w-80 cursor-pointer"
			onMouseEnter={() => setIsLoading(true)}
			onMouseLeave={() => setIsLoading(false)}
		>
			<ProgressBar position="left-0" isLoading={isLoading} />
			<div className="flex-none tracking-widest text-black2white font-semibold">
				SPRAWDŹ
			</div>
			<ProgressBar position="right-0" isLoading={isLoading} />
		</div>
	);
};

export default HomeButton;
