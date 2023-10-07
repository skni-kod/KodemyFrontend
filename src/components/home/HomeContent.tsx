import { useRouter } from 'next/router';
import LogoDesktop from '@/components/common/navbar/atoms/LogoDesktop';
import Typewriter from 'typewriter-effect';
import HomeButton from '@/components/home/atoms/HomeButton';

enum Stage {
	SECTION,
	CATEGORY,
}

type StageData = {
	section: number | null;
	category: number | null;
};

const TypewriterComponent = ({
	value,
	delayMs,
}: {
	value: string;
	delayMs: number;
}) => {
	return (
		<Typewriter
			onInit={(writer) => {
				writer.pauseFor(delayMs);
				writer.typeString(value);
				writer.start();
			}}
		/>
	);
};

const HomeContent = () => {
	const router = useRouter();

	return (
		<div className="w-full h-full">
			<div className="pt-20 pl-20">
				<LogoDesktop height={150} theme="light" visibility={'block'} />
				<div className="flex flex-col gap-y-12 pl-9 pt-4">
					<div>
						<div className="flex flex-col gap-x-2 text-2xl leading-normal text-gray-800 font-semibold">
							<span>Szukasz materiału o konkretnej tematyce?</span>
							<span>U nas znajdziesz wszystko.</span>
						</div>
					</div>
					<HomeButton />
				</div>
			</div>
		</div>
	);
};

export default HomeContent;
