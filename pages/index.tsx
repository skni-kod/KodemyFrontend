import Head from "next/head";
import HomeBubble from "../components/HomeBubble";

export default function Home() {
  return (
    <>
      <Head>
        <title>Kodemy</title>
        <meta
          name="description"
          content="Kodemy to najlepszy zbiór materiałów."
        />
      </Head>

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
        <HomeBubble className="basis-5/12">
          <>
            Elektroniki <br /> Retro
          </>
        </HomeBubble>
        <HomeBubble className="basis-5/12 relative top-14 left-4">
          <>Inne</>
        </HomeBubble>
        <HomeBubble className="basis-5/12 relative right-16">
          <>
            Aplikacje <br /> webowe
          </>
        </HomeBubble>
      </div>
    </>
  );
}
