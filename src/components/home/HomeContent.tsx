import LogoDesktop from '@/components/common/navbar/atoms/LogoDesktop';
import HomeButton from '@/components/home/atoms/HomeButton';

const HomeContent = () => {
	return (
		<div className="w-full h-full">
			<div className="flex flex-col justify-center w-1/2 pt-32 px-15 md:pl-28 xl:pl-20">
				<LogoDesktop height={150} />
				<div className="flex flex-col gap-y-12 pl-9 pt-4">
					<div>
						<div className="flex flex-col gap-x-2 text-2xl leading-normal text-black2white font-semibold">
							<span>Szukasz materiału o konkretnej tematyce?</span>
							<span>U nas znajdziesz wszystko.</span>
						</div>
					</div>
					<HomeButton />
				</div>
			</div>
			<div className="w-1/2"></div>
		</div>
	);
};

export default HomeContent;
