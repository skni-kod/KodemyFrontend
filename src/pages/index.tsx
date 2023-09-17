import Head from "next/head";
import { metadata } from "@/pages/_document";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Favicon from "@/assets/favicon.ico";
import HomeBubble from "@/components/home/bubble/HomeBubble";

export default function Home() {
  const router = useRouter();
  const [stage, setStage] = useState(1);
  const [firstCategory, setFirstCategory] = useState("");
  const [secondCategory, setSecondCategory] = useState("");

  return (
    <>
      <Head>
        <title>{metadata.title as string}</title>
        <meta name="description" content={metadata.description as string} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={Favicon.src} />
      </Head>
      <main>
        <div className="px-7 pr-[5rem] pl-[5rem] 2sm:pr-[7rem] 2sm:pl-[7rem] sm:pr-[10rem] sm:pl-[10rem] sm:pb-8 max-h-screen max-w-[1000px] mx-auto">
          <div className="flex justify-center pt-8">
            <div className="flex items-center gap-4">
              <div className="rounded-full border-sky-500 text-sky-500 shadow-lg border-2 h-10 w-10 flex items-center justify-center font-semibold bg-white">
                1
              </div>
              <div className="h-[3px] w-6 bg-sky-500"></div>
            </div>
            <div className="flex items-center gap-4">
              <div
                className={
                  stage != 2 ? "h-[3px] w-6 bg-black" : "h-[3px] w-6 bg-sky-500"
                }
              ></div>
              <div
                className={
                  stage == 2
                    ? "rounded-full border-sky-500 text-sky-500 shadow-lg border-2 h-10 w-10 flex items-center justify-center font-semibold bg-white"
                    : "rounded-full border-black border-2 h-10 w-10 flex items-center justify-center font-semibold bg-white"
                }
              >
                2
              </div>
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center mt-4 mb-8">
            {stage == 1 ? "Wybierz sekcję" : "Wybierz kategorię"}
          </h1>

          {stage == 1 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 justify-center items-center mx-auto ">
              <HomeBubble
                className="basis-[45%] relative left-10 top-10 transition duration-500 hover:-translate-y-1 max-h-[10rem]"
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
                className="row-span-2 relative top-16 transition duration-500 hover:-translate-y-1 max-h-[15rem] "
                name="gamedev"
                category={firstCategory}
                setCategory={setFirstCategory}
              >
                <>GameDev</>
              </HomeBubble>
              <HomeBubble
                className="basis-5/12 top-2 transition duration-500 hover:-translate-y-1 "
                name="ekektroniki retro"
                category={firstCategory}
                setCategory={setFirstCategory}
              >
                <>
                  Elektroniki <br /> Retro
                </>
              </HomeBubble>
              <HomeBubble
                className="basis-5/12 relative top-14 left-4 transition duration-500 hover:-translate-y-1 max-h-[12rem]"
                name="inne"
                category={firstCategory}
                setCategory={setFirstCategory}
              >
                <>Inne</>
              </HomeBubble>
              <HomeBubble
                className="basis-5/12 relative right-5 top-10 transition duration-500 hover:-translate-y-1 "
                name="aplikacje webowe"
                category={firstCategory}
                setCategory={setFirstCategory}
              >
                <>
                  Aplikacje <br /> webowe
                </>
              </HomeBubble>{" "}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center items-center mx-auto max-w-xl transition duration-500 hover:-translate-y-1 ">
              <HomeBubble
                className="basis-6/12"
                name="gamedev ogolny"
                category={secondCategory}
                setCategory={setSecondCategory}
              >
                <>
                  GameDev
                  <br />
                  Ogólny
                </>
              </HomeBubble>
              <HomeBubble
                className="basis-5/12 relative bottom-4 transition duration-500 hover:-translate-y-1 max-h-[10rem]"
                name="unity"
                category={secondCategory}
                setCategory={setSecondCategory}
              >
                <>Unity</>
              </HomeBubble>
              <HomeBubble
                className="basis-5/12 relative transition duration-500 hover:-translate-y-1 "
                name="unreal"
                category={secondCategory}
                setCategory={setSecondCategory}
              >
                <>Unreal</>
              </HomeBubble>
              <HomeBubble
                className="basis-5/12 relative bottom-6 transition duration-500 hover:-translate-y-1 max-h-[15rem]"
                name="grafika 2d"
                category={secondCategory}
                setCategory={setSecondCategory}
              >
                <>Grafika 2D</>
              </HomeBubble>
              <HomeBubble
                className="basis-5/12 relative transition duration-500 hover:-translate-y-1 bottom-10 "
                name="godot"
                category={secondCategory}
                setCategory={setSecondCategory}
              >
                <>Godot</>
              </HomeBubble>
              <HomeBubble
                className="basis-5/12 relative bottom-2 transition duration-500 hover:-translate-y-1 max-h-[10rem]"
                name="grafika 3d"
                category={secondCategory}
                setCategory={setSecondCategory}
              >
                <>Grafika 3D</>
              </HomeBubble>
            </div>
          )}
          <button
            className="bg-sky-500 text-white font-semibold mx-auto block py-3 px-6 rounded-2xl mt-16"
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
