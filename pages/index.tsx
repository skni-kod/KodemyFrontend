import Head from "next/head";
import { useState } from "react";
import HomeBubble from "../components/HomeBubble";

export default function Home() {
  const [stage, setStage] = useState(1);

  return (
    <>
      <Head>
        <title>Kodemy</title>
        <meta
          name="description"
          content="Kodemy to najlepszy zbiór materiałów."
        />
      </Head>

      <div className="px-7">
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-4" bg-white>
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
          <div className="flex flex-wrap gap-2 justify-center items-center mx-auto max-w-xl">
            <HomeBubble className="basis-6/12">
              <>
                Języki <br />
                programowania
              </>
            </HomeBubble>
            <HomeBubble className="basis-5/12 relative top-16">
              <>GameDev</>
            </HomeBubble>
            <HomeBubble className="basis-5/12 top-2">
              <>
                Elektroniki <br /> Retro
              </>
            </HomeBubble>
            <HomeBubble className="basis-5/12 relative top-14 left-4">
              <>Inne</>
            </HomeBubble>
            <HomeBubble className="basis-5/12 relative right-12 top-4">
              <>
                Aplikacje <br /> webowe
              </>
            </HomeBubble>{" "}
          </div>
        ) : (
          <div className="flex flex-wrap gap-4 justify-center items-center mx-auto max-w-xl">
            <HomeBubble className="basis-6/12">
              <>
                GameDev
                <br />
                Ogólny
              </>
            </HomeBubble>
            <HomeBubble className="basis-5/12 relative bottom-4">
              <>Unity</>
            </HomeBubble>
            <HomeBubble className="basis-5/12 relative">
              <>Unreal</>
            </HomeBubble>
            <HomeBubble className="basis-5/12 relative bottom-6">
              <>Grafika 2D</>
            </HomeBubble>
            <HomeBubble className="basis-5/12 relative">
              <>Godot</>
            </HomeBubble>
            <HomeBubble className="basis-5/12 relative bottom-2">
              <>Grafika 3D</>
            </HomeBubble>
          </div>
        )}
      </div>
      <button
        className="bg-sky-500 text-white font-semibold mx-auto block py-3 px-6 rounded-2xl mt-16"
        onClick={() => setStage(2)}
      >
        Następne &gt;
      </button>
    </>
  );
}
