import Image from 'next/image';

import { clsx } from 'clsx';
import TickImage from '@/assets/home/tick.svg';

type Props = {
	children: JSX.Element;
	className?: String;
	variant?: 'HomeBubble' | 'ButtonBubble';
	setCategory: Function;
	name: String;
	category: String;
};

const HomeBubble = ({
	children,
	className,
	category,
	setCategory,
	name,
	variant = 'HomeBubble',
}: Props) => {
	const handleClick = () => {
		setCategory(name);
	};

	return (
		<div
			className={clsx(
				'flex cursor-pointer relative border-2 font-semibold text-center items-center justify-center text-[0.5rem] sm:text-[0.7rem] md:text-[1.1rem] bg-white',
				variant === 'HomeBubble' &&
					'p-2 rounded-full min-h-[80px] aspect-square',
				variant === 'ButtonBubble' && 'py-2 px-4 mx-2 rounded-3xl shrink-0',
				category === name &&
					variant === 'HomeBubble' &&
					'border-sky-500 text-sky-500 shadow-lg',
				category === name &&
					variant === 'ButtonBubble' &&
					'border-sky-500 text-sky-500 shadow-lg',
				category !== name && variant === 'HomeBubble' && ' border-black',
				category !== name &&
					variant === 'ButtonBubble' &&
					' min-h-[60px] border-gray-400 text-gray-500',
				className,
			)}
			onClick={handleClick}
		>
			{category == name && variant == 'HomeBubble' ? (
				<Image
					src={TickImage.src}
					alt="Zaznaczono"
					width={20}
					height={20}
					className="absolute right-[8%] top-[8%]"
				/>
			) : (
				<></>
			)}

			{children}
		</div>
	);
};

export default HomeBubble;
