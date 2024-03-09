import Page from '@/components/layout/Page';
import LogoDesktop from '@/components_v2/common/navbar/atoms/LogoDesktop';
import HomeBackground from '@/components/home/HomeBackground';
import HomeButton from '@/components/home/HomeButton';

export default function Home() {
	return (
		<Page>
			<div className="relative w-full h-full flex flex-col">
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
				<div className="flex-grow pt-40">
					<HomeBackground />
				</div>
			</div>
		</Page>
	);
}
