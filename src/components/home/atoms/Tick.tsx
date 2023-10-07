import TickImage from '@/assets/home/tick.svg';
import Image from 'next/image';

const Tick = ({ className }: { className: string }) => {
	return (
		<Image
			src={TickImage.src}
			alt="Zaznaczono"
			width={20}
			height={20}
			className={className}
		/>
	);
};

export default Tick;
