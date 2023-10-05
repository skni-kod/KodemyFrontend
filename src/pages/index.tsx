import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Favicon from '@/assets/favicon.ico';
import HomeBubble from '@/components/home/bubble/HomeBubble';
import { Metadata } from '@/pages/_app';

export default function Home() {
	const router = useRouter();
	const [stage, setStage] = useState(1);
	const [firstCategory, setFirstCategory] = useState('');
	const [secondCategory, setSecondCategory] = useState('');

	return (
		<>
			<Head>
				<title>{Metadata.title as string}</title>
				<meta name="description" content={Metadata.description as string} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="hight" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={Favicon.src} />
			</Head>
			<main>
				<div className="min-h-[91.4vh] w-full bg-white2verydarkgrey flex flex-col justify-center items-center px-7 pr-[5rem] pl-[5rem] 2sm:pr-[7rem] 2sm:pl-[7rem] sm:pr-[10rem] sm:pl-[10rem] sm:pb-8 mx-auto">
					<div className="flex justify-center pt-8">
						<div className="flex items-center gap-4">
							<div className="rounded-full border-sky-500 text-sky-500 shadow-lg border-2 h-10 w-10 flex items-center justify-center font-semibold bg-white2darkgrey">
								1
							</div>
							<div className="h-[3px] w-6 bg-sky-500"></div>
						</div>
						<div className="flex items-center gap-4">
							<div
								className={
									stage != 2
										? 'h-[3px] w-6 bg-black2white'
										: 'h-[3px] w-6 bg-sky-500'
								}
							></div>
							<div
								className={
									stage == 2
										? 'rounded-full border-sky-500 text-sky-500 shadow-lg border-2 h-10 w-10 flex items-center justify-center font-semibold bg-white2darkgrey'
										: 'rounded-full border-black2white text-black2white border-2 h-10 w-10 flex items-center justify-center font-semibold bg-white2darkgrey'
								}
							>
								2
							</div>
						</div>
					</div>
					<h1 className="text-2xl font-bold text-center text-black2white mt-4 mb-8">
						{stage == 1 ? 'Wybierz sekcję' : 'Wybierz kategorię'}
					</h1>

					{stage == 1 ? (
						<div className="grid grid-cols-2 md:grid-cols-[170px_170px_170px] gap-1 justify-center items-center ">
							<HomeBubble
								className="basis-[45%]"
								name="jezyki programowania"
								category={firstCategory}
								setCategory={setFirstCategory}
							>
								<>
									Języki <br />
									programowania
								</>
							</HomeBubble>
							<HomeBubble
								className="basis-5/12 relative top-16 sm:top-16"
								name="gamedev"
								category={firstCategory}
								setCategory={setFirstCategory}
							>
								<>GameDev</>
							</HomeBubble>
							<HomeBubble
								className="basis-5/12 top-2"
								name="ekektroniki retro"
								category={firstCategory}
								setCategory={setFirstCategory}
							>
								<>
									Elektroniki <br /> Retro
								</>
							</HomeBubble>
							<HomeBubble
								className="basis-5/12 relative top-20 sm:top-16 sm:left-4"
								name="inne"
								category={firstCategory}
								setCategory={setFirstCategory}
							>
								<>Inne</>
							</HomeBubble>
							<HomeBubble
								className="basis-5/12 relative top-4 md:left-32 md:top-4  "
								name="aplikacje webowe"
								category={firstCategory}
								setCategory={setFirstCategory}
							>
								<>
									Aplikacje <br /> webowe
								</>
							</HomeBubble>{' '}
						</div>
					) : (
						<div className="grid grid-cols-2 md:grid-cols-[170px_170px_170px] gap-1 justify-center items-center ">
							<HomeBubble
								className=""
								name="gamedev ogólny"
								category={secondCategory}
								setCategory={setSecondCategory}
							>
								<>
									Gamedev <br />
									ogólny
								</>
							</HomeBubble>
							<HomeBubble
								className="basis-5/12 relative top-32 sm:top-6"
								name="unity"
								category={secondCategory}
								setCategory={setSecondCategory}
							>
								<>Unity</>
							</HomeBubble>
							<HomeBubble
								className="basis-5/12 top-2"
								name="unreal"
								category={secondCategory}
								setCategory={setSecondCategory}
							>
								<>Unreal</>
							</HomeBubble>
							<HomeBubble
								className="basis-5/12 relative top-32 right-24 sm:top-7 sm:left-0"
								name="grafika 2d"
								category={secondCategory}
								setCategory={setSecondCategory}
							>
								<>Grafika 2D</>
							</HomeBubble>
							<HomeBubble
								className="basis-5/12 relative bottom-32 left-32  sm:top-7 sm:left-4"
								name="godot"
								category={secondCategory}
								setCategory={setSecondCategory}
							>
								<>Godot</>
							</HomeBubble>
							<HomeBubble
								className="basis-5/12 relative left-16 top-8"
								name="grafika 3d"
								category={secondCategory}
								setCategory={setSecondCategory}
							>
								<>Grafika 3D</>
							</HomeBubble>{' '}
						</div>
					)}
					<button
						className="bg-sky-500 hover:bg-blue-600 text-white font-semibold mx-auto block py-3 px-6 rounded-2xl mt-16"
						onClick={() => {
							if (stage == 1) setStage(2);
							else if (stage == 2)
								router.push({
									pathname: `/sectionGeneral`,
									query: { firstCategory, secondCategory },
								});
						}}
					>
						Następne &gt;
					</button>
				</div>
			</main>
		</>
	);
}
